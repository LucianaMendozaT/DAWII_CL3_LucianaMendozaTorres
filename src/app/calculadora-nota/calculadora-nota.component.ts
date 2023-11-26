import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-nota',
  templateUrl: './calculadora-nota.component.html',
  styleUrls: ['./calculadora-nota.component.css']
})
export class CalculadoraNotasComponent {
  
  primeraNota: number = 0;
  segundaNota: number = 0;
  terceraNota: number = 0;
  cuartaNota: number = 0;
  promedio: number | null = null;

  calcularPromedio() {

    const notasOrdenadas = [this.primeraNota, this.segundaNota, this.terceraNota, this.cuartaNota].sort((a, b) => b - a);

    this.promedio = (notasOrdenadas[0] * 0.2) + (notasOrdenadas[1] * 0.3) + (notasOrdenadas[2] * 0.5);
  }
}
