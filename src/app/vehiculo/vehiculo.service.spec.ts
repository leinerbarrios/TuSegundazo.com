import { TestBed, inject } from '@angular/core/testing';

import { VehiculoService } from './vehiculo.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Describe: Vehiculo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculoService],
    });
  });

  it('should ...', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));
});
