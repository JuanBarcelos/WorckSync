import { Component, Input } from '@angular/core';

export interface CardData {
  iconClass: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-dashboard-card',
  imports: [],
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.scss',
})

export class DashboardCard {
  @Input() cardData!: CardData;
}
