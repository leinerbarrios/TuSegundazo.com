import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, VehiculoComponent, HttpClientModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'TuSegundazo.com';
}
