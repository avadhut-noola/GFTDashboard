import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('pieChart', { static: false }) pieChart!: ElementRef;
  
  salesReportData: any[] = [];
  fastMovingItems: any[] = [];
  slowMovingItems: any[] = [];
  salesPersonRanking: any[] = [];
  customerAnalytics: any[] = [];
  topCustomers: any[] = [];
  lowMovingCustomers: any[] = [];
  loading = true;
  
  chart: Chart | null = null;
  private chartColors = ['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateChart();
    }, 100);
  }

  async loadDashboardData() {
    try {
      this.loading = true;
      
      this.salesReportData = await this.dashboardService.getSalesReport();
      this.fastMovingItems = await this.dashboardService.getFastMovingItems();
      this.slowMovingItems = await this.dashboardService.getSlowMovingItems();
      this.salesPersonRanking = await this.dashboardService.getSalesPersonRanking();
      this.customerAnalytics = await this.dashboardService.getCustomerAnalytics();
      
      this.processCustomerData();
      
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      this.loading = false;
      setTimeout(() => {
        this.updateChart();
      }, 100);
    }
  }

  processCustomerData() {
    if (this.customerAnalytics.length > 0) {
      const sortedData = [...this.customerAnalytics].sort((a, b) => b.totalAmount - a.totalAmount);
      this.topCustomers = sortedData.slice(0, 5);
      this.lowMovingCustomers = sortedData.slice(-5).reverse();
    }
  }

  getChartColor(index: number): string {
    return this.chartColors[index] || '#6c757d';
  }

  updateChart() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }

    if (this.pieChart && this.topCustomers.length > 0) {
      const ctx = this.pieChart.nativeElement.getContext('2d');
      
      const config: ChartConfiguration = {
        type: 'pie' as ChartType,
        data: {
          labels: this.topCustomers.map(customer => customer.customerName),
          datasets: [{
            data: this.topCustomers.map(customer => customer.totalAmount),
            backgroundColor: this.chartColors.slice(0, this.topCustomers.length),
            borderColor: [
              '#5a67d8',
              '#ed64a6',
              '#4299e1',
              '#38a169',
              '#e53e3e'
            ].slice(0, this.topCustomers.length),
            borderWidth: 2,
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 20,
                usePointStyle: true,
                font: {
                  size: 12
                }
              }
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label || '';
                  const value = context.parsed;
                  const total = (context.dataset.data as number[]).reduce((a: number, b: number) => a + b, 0);
                  const percentage = ((value / total) * 100).toFixed(1);
                  return `${label}: $${value.toLocaleString()} (${percentage}%)`;
                }
              }
            }
          },
          layout: {
            padding: {
              top: 10,
              bottom: 10
            }
          }
        }
      };

      this.chart = new Chart(ctx, config);
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}