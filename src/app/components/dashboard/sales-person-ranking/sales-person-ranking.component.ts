import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sales-person-ranking',
  templateUrl: './sales-person-ranking.component.html',
  styleUrls: ['./sales-person-ranking.component.scss']
})
export class SalesPersonRankingComponent {
  @Input() rankingData: any[] = [];

  getProgressColor(progress: number): "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined {
    if (progress < 45) return 'danger';
    if (progress >= 45 && progress <= 79) return 'warning';
    return 'success';
  }

  getProgressClass(progress: number): string {
    if (progress < 45) return 'progress-red';
    if (progress >= 45 && progress <= 79) return 'progress-yellow';
    return 'progress-green';
  }

  getStatusIcon(progress: number): string {
    if (progress < 45) return 'pi-times-circle';
    if (progress >= 45 && progress <= 79) return 'pi-exclamation-triangle';
    return 'pi-check-circle';
  }

  getStatusText(progress: number): string {
    if (progress < 45) return 'Below Target';
    if (progress >= 45 && progress <= 79) return 'Approaching Target';
    return 'Target Achieved';
  }

  getPerformanceLabel(progress: number): string {
    if (progress < 45) return 'Needs Improvement';
    if (progress >= 45 && progress <= 79) return 'Good Progress';
    return 'Excellent';
  }

  getRankClass(index: number): string {
    if (index === 0) return 'rank-1';
    if (index === 1) return 'rank-2';
    if (index === 2) return 'rank-3';
    return 'rank-default';
  }
}