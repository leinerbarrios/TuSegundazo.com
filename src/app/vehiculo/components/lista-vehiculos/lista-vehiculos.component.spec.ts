import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVehiculosComponent } from './lista-vehiculos.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoService } from '../../vehiculo.service';
import { of } from 'rxjs';
import { Vehiculo } from '../../vehiculo';

describe('ListaVehiculosComponent', () => {
  let component: ListaVehiculosComponent;
  let fixture: ComponentFixture<ListaVehiculosComponent>;
  let vehiculoServiceMock: jasmine.SpyObj<VehiculoService>;

  const vehiculos: Vehiculo[] = [
    {
      id: 1,
      marca: 'Renault',
      linea: 'Linea 1',
      modelo: 2020,
      color: 'Blanco',
      kilometraje: 10000,
      referencia: 'Referencia 1',
    },
    {
      id: 2,
      marca: 'Chevrolet',
      linea: 'Linea 2',
      modelo: 2021,
      color: 'Verde',
      kilometraje: 20000,
      referencia: 'Referencia 2',
    },
    {
      id: 3,
      marca: 'Renault',
      linea: 'Linea 3',
      modelo: 2022,
      color: 'Azul',
      kilometraje: 30000,
      referencia: 'Referencia 3',
    },
  ];

  beforeEach(async () => {
    vehiculoServiceMock = jasmine.createSpyObj('VehiculoService', [
      'obtenerVehiculos',
    ]);
    vehiculoServiceMock.obtenerVehiculos.and.returnValue(of(vehiculos));
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ListaVehiculosComponent],
      providers: [{ provide: VehiculoService, useValue: vehiculoServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table with 4 rows', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('tr').length).toBe(4);
  });
});
