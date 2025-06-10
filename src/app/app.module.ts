import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesReportOverviewComponent } from './components/dashboard/sales-report-overview/sales-report-overview.component';
import { MovingItemsSectionComponent } from './components/dashboard/moving-items-section/moving-items-section.component';
import { SalesPersonRankingComponent } from './components/dashboard/sales-person-ranking/sales-person-ranking.component';
import { CustomerAnalyticsComponent } from './components/dashboard/customer-analytics/customer-analytics.component';

// Register Chart.js components
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PieController
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PieController
);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SalesReportOverviewComponent,
    MovingItemsSectionComponent,
    SalesPersonRankingComponent,
    CustomerAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    CardModule,
    TableModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    TagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }