import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'franco';
  noombreUpper: string = 'FRANCO';
  nombreCompleto: string = 'frAnCo PeRalTA';

  fecha: Date = new Date(); // El día de hoy
}
