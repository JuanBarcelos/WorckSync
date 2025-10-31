import { Component } from '@angular/core';
import { EmployerCard, type EmployeesCard } from '../../components/employer-card/employer-card';
import { SecondaryButton } from "../../components/shared/secondary-button/secondary-button";
import { PrimaryButton } from "../../components/shared/primary-button/primary-button";

@Component({
  selector: 'app-employees',
  imports: [EmployerCard, SecondaryButton, PrimaryButton],
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
