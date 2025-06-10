import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sales-report-overview',
  templateUrl: './sales-report-overview.component.html',
  styleUrls: ['./sales-report-overview.component.scss']
})
export class SalesReportOverviewComponent implements OnChanges {
  @Input() salesData: any[] = [];
  
  totalGrossSales = 0;
  totalNetSales = 0;
  totalSalesPersons = 0;
  averageGrossSales = 0;

  ngOnChanges() {
    this.calculateMetrics();
  }

  calculateMetrics() {
    if (this.salesData.length > 0) {
      this.totalGrossSales = this.salesData.reduce((sum, item) => sum + item.grossSales, 0);
      this.totalNetSales = this.salesData.reduce((sum, item) => sum + item.netSales, 0);
      this.totalSalesPersons = this.salesData.length;
      this.averageGrossSales = this.totalGrossSales / this.totalSalesPersons;
    }
  }
}