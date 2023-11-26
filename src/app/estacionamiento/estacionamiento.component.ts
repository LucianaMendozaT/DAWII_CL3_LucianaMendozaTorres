import { Component } from '@angular/core';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.css']
})
export class EstacionamientoComponent {
  hours: number = 0;
  minutes: number = 0;
  totalCost: number | null = null;

  calcularCosto() {
    const tiempoTotalEnHoras = this.hours + this.minutes / 60;
    const costoPorHora = 1500; 

    this.totalCost = tiempoTotalEnHoras * costoPorHora;
  }
}
