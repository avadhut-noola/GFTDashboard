import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  salesReportData: any[] = [];
  fastMovingItems: any[] = [];
  slowMovingItems: any[] = [];
  salesPersonRanking: any[] = [];
  customerAnalytics: any[] = [];
  loading = true;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  async loadDashboardData() {
    try {
      this.loading = true;
      
      this.salesReportData = await this.dashboardService.getSalesReport();
      this.fastMovingItems = await this.dashboardService.getFastMovingItems();
      this.slowMovingItems = await this.dashboardService.getSlowMovingItems();
      this.salesPersonRanking = await this.dashboardService.getSalesPersonRanking();
      this.customerAnalytics = await this.dashboardService.getCustomerAnalytics();
      
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      this.loading = false;
    }
  }
}