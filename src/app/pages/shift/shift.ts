import { Component } from '@angular/core';
import { SecondaryButton } from '../../components/shared/secondary-button/secondary-button';
import { PrimaryButton } from '../../components/shared/primary-button/primary-button';
import { ShiftCard, ShiftsCard } from '../../components/shift-card/shift-card';

@Component({
  selector: 'app-shift',
  imports: [SecondaryButton, PrimaryButton, ShiftCard],
  templateUrl: './shift.html',
  styleUrl: './shift.scss',
})
export class Shift {
  shifts: ShiftsCard[] = [
    {
      name: 'Turno Noite',
      role: 'Gestão de Frotas',
      status: 'Ativo',
      startTime: '20:00',
      departureTime: '08:00',
      lunchTime: '22:00 - 23:00',
    },
    {
      name: 'Turno Noite',
      role: 'Gestão de Frotas',
      status: 'Ativo',
      startTime: '20:00',
      departureTime: '08:00',
      lunchTime: '22:00 - 23:00',
    },
    {
      name: 'Turno Noite',
      role: 'Gestão de Frotas',
      status: 'Ativo',
      startTime: '20:00',
      departureTime: '08:00',
      lunchTime: '22:00 - 23:00',
    },
  ];
}
