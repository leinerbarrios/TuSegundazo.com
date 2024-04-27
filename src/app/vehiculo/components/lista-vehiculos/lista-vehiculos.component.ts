import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../vehiculo.service';
import { Vehiculo } from '../../vehiculo';

@Component({
  selector: 'app-lista-vehiculos',
  standalone: true,
  imports: [],
  templateUrl: './lista-vehiculos.component.html',
  styles: `
    #contenedor-cantidad-vehiculos {
      width: max-content;
    }
  `
})
export class ListaVehiculosComponent implements OnInit {
  public vehiculos: Vehiculo[] = [];
  public listadoDeVehiculos: { marca: string; cantidad: number }[] = [];

  constructor(private vehiculoService: VehiculoService) {}

  public ngOnInit(): void {
    this.vehiculoService.obtenerVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.calcularListadoDeVehiculos();
    });
  }

  private calcularListadoDeVehiculos(): void {
    const cuentas: { [key: string]: number } = this.vehiculos.reduce((acc: { [key: string]: number }, vehiculo) => {
      acc[vehiculo.marca] = (acc[vehiculo.marca] || 0) + 1;
      return acc;
    }, {});

    this.listadoDeVehiculos = Object.entries(cuentas).map(([marca, cantidad]) => ({ marca, cantidad: Number(cantidad) }));
  }
}
