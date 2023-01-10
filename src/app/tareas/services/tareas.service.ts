import { Injectable } from '@angular/core';
import { TareaInteraface } from '../interfaces/tareas.interface';

@Injectable({
  providedIn: 'root'
})


export class TareasService {

  constructor() { }

  contadorTareasTotales: number = 0;
  contadorTareasEnCurso: number = 0;
  contadorTareasFinalizadas: number = 0;


  historialTareas: TareaInteraface[] = [];


  guardarTareas(tarea: TareaInteraface) {
    this.historialTareas.push(tarea);
    console.log(this.historialTareas);

    localStorage.setItem('historialTareas',JSON.stringify(this.historialTareas))
  }


}
