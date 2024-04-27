import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VehiculoComponent } from './vehiculo/vehiculo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, VehiculoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shopycar';
}
