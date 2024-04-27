import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

export interface RepositorioVehiculos {
  obtenerVehiculos(): Observable<Vehiculo[]>;
}
