import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moving-items-section',
  templateUrl: './moving-items-section.component.html',
  styleUrls: ['./moving-items-section.component.scss']
})
export class MovingItemsSectionComponent {
  @Input() fastMovingItems: any[] = [];
  @Input() slowMovingItems: any[] = [];
}