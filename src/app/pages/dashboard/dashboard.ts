import { Component } from '@angular/core';
import { DashboardCard, type CardData } from '../../components/dashboard-card/dashboard-card';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCard, PrimaryButton, SecondaryButton],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  cards: CardData[] = [
    {
      iconClass: 'ph ph-users-three',
      title: 'Funcionários',
      description: 'Gerencie os colaboradores da empresa e visualize seus dados de ponto e jornada.',
    },
    {
      iconClass: 'ph ph-clock-user',
      title: 'Turnos',
      description: 'Organize os turnos de trabalho e mantenha os horários sempre atualizados.',
    },
    {
      iconClass: 'ph ph-files',
      title: 'Relatórios',
      description: 'Acompanhe métricas e registros de ponto com relatórios claros e detalhados.',
    },
    {
      iconClass: 'ph ph-user-list',
      title: 'Usuários',
      description: 'Controle o acesso ao sistema e gerencie as permissões de cada usuário.',
    },
  ];
}
