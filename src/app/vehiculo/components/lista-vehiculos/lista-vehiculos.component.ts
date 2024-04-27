import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../vehiculo.service';
import { Vehiculo } from '../../vehiculo';

@Component({
  selector: 'app-lista-vehiculos',
  standalone: true,
  imports: [],
  templateUrl: './lista-vehiculos.component.html',
  styles: ``,
})
export class ListaVehiculosComponent implements OnInit {
  public vehiculos: Vehiculo[] = [];

  constructor(private vehiculoService: VehiculoService) {}

  public ngOnInit(): void {
    this.vehiculoService
      .obtenerVehiculos()
      .subscribe((vehiculos) => (this.vehiculos = vehiculos));
  }
}
