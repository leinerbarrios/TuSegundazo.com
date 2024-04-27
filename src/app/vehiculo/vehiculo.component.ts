import { Component } from '@angular/core';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [ListaVehiculosComponent, HttpClientModule],
  templateUrl: './vehiculo.component.html',
  styles: ``
})
export class VehiculoComponent {

}
