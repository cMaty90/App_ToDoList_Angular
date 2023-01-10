import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent {

  constructor(private servicioTareas:TareasService){}


  get tareasTotales() {
    return this.servicioTareas.contadorTareasTotales;
  }

  get tareasFinalizadas() {
    return this.servicioTareas.contadorTareasFinalizadas;
  }

  get tareasEnCurso() {
    return this.servicioTareas.contadorTareasEnCurso;
  }
}
