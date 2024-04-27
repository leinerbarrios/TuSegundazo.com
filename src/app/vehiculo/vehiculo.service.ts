import { Injectable } from '@angular/core';
import { apiUrl } from './api-url';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Vehiculo } from './vehiculo';
import { RepositorioVehiculos } from './repositorio-vehiculo.interface';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService implements RepositorioVehiculos {
  private readonly URL = apiUrl;

  constructor(private http: HttpClient) {}

  public obtenerVehiculos(): Observable<Vehiculo[]> {
    return this.http
      .get<Vehiculo[]>(this.URL)
      .pipe(map((vehiculos: Vehiculo[]) => vehiculos.map(this.mapearVehiculo)));
  }

  private mapearVehiculo(vehiculo: Vehiculo): Vehiculo {
    return new Vehiculo(
      vehiculo.id,
      vehiculo.marca,
      vehiculo.linea,
      vehiculo.referencia,
      vehiculo.modelo,
      vehiculo.kilometraje,
      vehiculo.color
    );
  }
}
