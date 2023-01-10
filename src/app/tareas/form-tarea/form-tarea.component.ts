import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TareaInteraface } from '../interfaces/tareas.interface';
import { TareasService } from '../services/tareas.service';


@Component({
  selector: 'app-form-tarea',
  templateUrl: './form-tarea.component.html',
  styleUrls: ['./form-tarea.component.css']
})


export class FormTareaComponent {

  constructor(private servicioTareas: TareasService) { }

  // @ViewChild('formulario') formulario!:ElementRef<HTMLFormElement>;

  tarea: TareaInteraface = {
    nombreTarea: '',
    descripcionTarea: ''
  }

  procesarTarea() {

    console.log(this.tarea);
    this.servicioTareas.guardarTareas(this.tarea);

    this.tarea = {
      nombreTarea:'',
      descripcionTarea:''
    }

    this.servicioTareas.contadorTareasTotales += 1;
    this.servicioTareas.contadorTareasEnCurso += 1;
  }
}
