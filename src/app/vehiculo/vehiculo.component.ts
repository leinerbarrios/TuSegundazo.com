import { Component } from '@angular/core';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';

@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [ListaVehiculosComponent],
  templateUrl: './vehiculo.component.html',
  styles: ``
})
export class VehiculoComponent {

}
