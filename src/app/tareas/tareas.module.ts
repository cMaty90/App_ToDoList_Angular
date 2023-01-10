import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTareaComponent } from './form-tarea/form-tarea.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FormTareaComponent,
    MainPageComponent,
    ReportesComponent,
    ListaTareasComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TareasModule { }
