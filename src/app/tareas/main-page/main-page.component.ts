import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  get fechaActual() {
    let fecha = new Date;
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1;
    let año = fecha.getFullYear();
    let fechaActual = `Fecha: ${dia}/${mes}/${año}`;
    return fechaActual
  }

}
