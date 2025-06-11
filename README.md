# Client Reporting Dashboard

A comprehensive Angular-based dashboard for client reporting with sales analytics, customer insights, and performance tracking.

## Features

- **Sales Report Overview**: Complete sales metrics with gross/net sales tracking
- **Moving Items Analysis**: Top 5 fast and slow moving items with visual indicators
- **Sales Person Ranking**: Target-based performance tracking with color-coded progress
- **Customer Analytics**: Top customers pie chart and low-moving customers list
- **Responsive Design**: Mobile-friendly interface with clean, professional styling

## Technology Stack

- **Framework**: Angular 17
- **UI Library**: PrimeNG
- **Charts**: Chart.js
- **Styling**: SCSS with custom themes
- **Icons**: PrimeIcons

## Installation

1. Install dependencies:

npm install


2. Start the development server:

ng serve


3. Open your browser and navigate to `http://localhost:4200`

## Project Structure

<pre lang="markdown"> ```text src/ ├── app/ │ ├── components/ │ │ └── dashboard/ │ │ ├── dashboard.component.* │ │ ├── sales-report-overview/ │ │ ├── moving-items-section/ │ │ ├── sales-person-ranking/ │ │ └── customer-analytics/ │ ├── services/ │ │ └── dashboard.service.ts │ ├── app.component.* │ ├── app.module.ts │ └── app-routing.module.ts ├── styles.scss └── index.html ``` </pre>
  
## API Integration

The dashboard is designed to work with the following API endpoints:

### Sales Report

GetSalesReport(): Promise<Array<{
  firstName: string;
  lastName: string;
  grossSales: number;
  netSales: number;
}>>


### Moving Items

GetFastMovingItems(): Promise<Array<{
  itemName: string;
  itemNumber: string;
  salesQuantity: number;
}>>

GetSlowMovingItems(): Promise<Array<{
  itemName: string;
  itemNumber: string;
  salesQuantity: number;
}>>


### Sales Person Ranking

GetSalesPersonRanking(): Promise<Array<{
  salesPersonName: string;
  Target: string;
  Progress: number;
}>>


### Customer Analytics

GetCustomerAnalytics(): Promise<Array<{
  customerName: string;
  totalPlaceOrder: string;
  totalAmount: number;
}>>


## Performance Indicators

### Sales Person Target Colors:
- **Red**: Progress < 45%
- **Yellow**: Progress 45-79%
- **Green**: Progress ≥ 80%

## Customization

### Themes
The dashboard uses PrimeNG's Lara Light Blue theme. To change themes, update the import in `src/styles.scss`:


@import "primeng/resources/themes/[theme-name]/theme.css";


### Colors
Custom color schemes can be modified in the component SCSS files. The dashboard uses a consistent color palette:

- Primary: `#667eea`
- Secondary: `#764ba2`
- Success: `#10b981`
- Warning: `#f59e0b`
- Danger: `#ef4444`

## Development

### Adding New Components
1. Generate component: `ng generate component components/your-component`
2. Add to `app.module.ts`
3. Include in dashboard layout

### Mock Data
The `DashboardService` currently uses mock data. Replace the service methods with actual HTTP calls to your API endpoints.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

