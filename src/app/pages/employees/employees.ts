import { Component } from '@angular/core';
import { EmployerCard, type EmployeesCard } from '../../components/employer-card/employer-card';

@Component({
  selector: 'app-employees',
  imports: [EmployerCard],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class Employees {
  employees: EmployeesCard[] = [
    {
      name: 'Juan Barcelos',
      role: 'Logística',
      email: 'juan@juan.com.br',
      phone: '+55 21 99999-9999',
      turn: 'Logística-Noite',
      status: 'Ativo',
    },
    {
      name: 'Vitor Lima',
      role: 'Gestão de Frotas',
      email: 'vitor@vitor.com.br',
      phone: '+55 21 99999-9999',
      turn: 'Gestão',
      status: 'Ferias',
    },
    {
      name: 'Jefferson Andrade',
      role: 'Gestão de Logístico',
      email: 'jefferson@jefferson.com.br',
      phone: '+55 21 99999-9999',
      turn: 'Logística-Manhã',
      status: 'Inativo',
    },
  ];
}
