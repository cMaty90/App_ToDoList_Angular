import { Component, ViewChild , ElementRef, Renderer2} from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  constructor(private servicioTareas: TareasService,
              private item:ElementRef) { }

  @ViewChild('listaTareas') listaTareas!: ElementRef;
  // @ViewChild('cBox') cBox!: ElementRef;


  get VectorTareas() {
    return this.servicioTareas.historialTareas;
  }

  borrarTarea(indice:number) {
    this.VectorTareas.splice(indice, 1);
    this.servicioTareas.contadorTareasEnCurso -= 1;
  }


  contarTareasFinalizadas(indice:number) {
    const elementos = this.item.nativeElement.querySelectorAll('.cBox');
    console.log(indice)
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[indice].checked) {
        this.servicioTareas.contadorTareasFinalizadas += 1;
        break
      }
      else {
        this.servicioTareas.contadorTareasFinalizadas -= 1;
        break
      }
    }
  }




}
