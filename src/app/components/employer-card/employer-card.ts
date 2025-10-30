import { Employees } from './../../pages/employees/employees';
import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { DropdownMenu } from '../shared/dropdown-menu/dropdown-menu';

export interface EmployeesCard {
  name: string;
  role: string;
  email: string;
  phone: string;
  turn: string;
  status: string;
}

@Component({
  selector: 'app-employer-card',
  templateUrl: './employer-card.html',
  styleUrl: './employer-card.scss',
  imports: [CommonModule, DropdownMenu],
})
export class EmployerCard implements OnInit {
  @Input() employees!: EmployeesCard;
  dropdownOpen = false;
  avatarGradient: string = '';

  // Paleta de gradientes
  private gradients: string[] = [
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #ff6a00, #ee0979)',
    'linear-gradient(135deg, #11998e, #38ef7d)',
    'linear-gradient(135deg, #fc5c7d, #6a82fb)',
    'linear-gradient(135deg, #f7971e, #ffd200)',
    'linear-gradient(135deg, #00c6ff, #0072ff)',
    'linear-gradient(135deg, #f953c6, #b91d73)',
    'linear-gradient(135deg, #43cea2, #185a9d)',
  ];

  ngOnInit(): void {
    this.avatarGradient = this.getRandomGradient();
  }

  private getRandomGradient(): string {
    const index = Math.floor(Math.random() * this.gradients.length);
    return this.gradients[index];
  }

  onMenuAction(action: string) {
    console.log('Ação escolhida:', action);
    // aqui você pode implementar lógica específica
  }
}
