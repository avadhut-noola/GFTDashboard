import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  // Mock API call - replace with actual HTTP calls
  async getSalesReport(): Promise<any[]> {
    // Simulate API delay
    await this.delay(1000);
    
    return [
      { firstName: "John", lastName: "Doe", grossSales: 15000.50, netSales: 12500.75 },
      { firstName: "Jane", lastName: "Smith", grossSales: 18500.25, netSales: 16200.00 },
      { firstName: "Mike", lastName: "Johnson", grossSales: 12300.80, netSales: 10800.60 },
      { firstName: "Sarah", lastName: "Wilson", grossSales: 22100.45, netSales: 19500.30 },
      { firstName: "David", lastName: "Brown", grossSales: 16800.90, netSales: 14200.15 },
      { firstName: "Lisa", lastName: "Davis", grossSales: 19200.35, netSales: 17100.25 },
      { firstName: "Tom", lastName: "Miller", grossSales: 14500.70, netSales: 12800.50 },
      { firstName: "Amy", lastName: "Garcia", grossSales: 20800.60, netSales: 18600.40 }
    ];
  }

  async getFastMovingItems(): Promise<any[]> {
    await this.delay(800);
    
    return [
      { itemName: "Premium Widget A", itemNumber: "PWA-001", salesQuantity: 1250.75 },
      { itemName: "Standard Component B", itemNumber: "SCB-002", salesQuantity: 980.50 },
      { itemName: "Deluxe Module C", itemNumber: "DMC-003", salesQuantity: 875.25 },
      { itemName: "Basic Unit D", itemNumber: "BUD-004", salesQuantity: 720.80 },
      { itemName: "Advanced Tool E", itemNumber: "ATE-005", salesQuantity: 650.45 }
    ];
  }

  async getSlowMovingItems(): Promise<any[]> {
    await this.delay(800);
    
    return [
      { itemName: "Legacy Product X", itemNumber: "LPX-101", salesQuantity: 45.20 },
      { itemName: "Specialty Item Y", itemNumber: "SIY-102", salesQuantity: 38.75 },
      { itemName: "Custom Solution Z", itemNumber: "CSZ-103", salesQuantity: 32.10 },
      { itemName: "Niche Component W", itemNumber: "NCW-104", salesQuantity: 28.90 },
      { itemName: "Rare Module V", itemNumber: "RMV-105", salesQuantity: 22.35 }
    ];
  }

  async getSalesPersonRanking(): Promise<any[]> {
    await this.delay(1200);
    
    return [
      { salesPersonName: "Sarah Wilson", Target: "25000.00", Progress: 88.4 },
      { salesPersonName: "Jane Smith", Target: "20000.00", Progress: 92.5 },
      { salesPersonName: "Amy Garcia", Target: "22000.00", Progress: 94.5 },
      { salesPersonName: "Lisa Davis", Target: "18000.00", Progress: 106.7 },
      { salesPersonName: "David Brown", Target: "17000.00", Progress: 98.8 },
      { salesPersonName: "John Doe", Target: "16000.00", Progress: 93.8 },
      { salesPersonName: "Tom Miller", Target: "15000.00", Progress: 96.7 },
      { salesPersonName: "Mike Johnson", Target: "14000.00", Progress: 87.9 },
      { salesPersonName: "Robert Taylor", Target: "13000.00", Progress: 72.3 },
      { salesPersonName: "Emily Anderson", Target: "12000.00", Progress: 65.8 },
      { salesPersonName: "Chris Martinez", Target: "11000.00", Progress: 58.2 },
      { salesPersonName: "Jessica White", Target: "10000.00", Progress: 42.5 },
      { salesPersonName: "Daniel Lee", Target: "9500.00", Progress: 38.9 },
      { salesPersonName: "Michelle Clark", Target: "9000.00", Progress: 35.2 },
      { salesPersonName: "Kevin Rodriguez", Target: "8500.00", Progress: 28.7 }
    ];
  }

  async getCustomerAnalytics(): Promise<any[]> {
    await this.delay(900);
    
    return [
      { customerName: "TechCorp Industries", totalPlaceOrder: "45", totalAmount: 225000.75 },
      { customerName: "Global Solutions Ltd", totalPlaceOrder: "38", totalAmount: 98500.50 },
      { customerName: "Innovation Systems", totalPlaceOrder: "42", totalAmount: 87200.25 },
      { customerName: "Future Dynamics", totalPlaceOrder: "35", totalAmount: 76800.90 },
      { customerName: "Smart Enterprises", totalPlaceOrder: "29", totalAmount: 65400.60 },
      { customerName: "Digital Ventures", totalPlaceOrder: "22", totalAmount: 45200.30 },
      { customerName: "Modern Tech Co", totalPlaceOrder: "18", totalAmount: 38900.15 },
      { customerName: "Advanced Systems", totalPlaceOrder: "15", totalAmount: 32100.80 },
      { customerName: "Startup Hub", totalPlaceOrder: "12", totalAmount: 28500.45 },
      { customerName: "Small Business Inc", totalPlaceOrder: "8", totalAmount: 18200.25 }
    ];
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}