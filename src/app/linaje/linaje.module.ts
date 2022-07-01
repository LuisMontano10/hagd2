import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinajeRoutingModule } from './linaje-routing.module';
import { LinajeComponent } from './linaje.component';


@NgModule({
  declarations: [LinajeComponent],
  imports: [
    CommonModule,
    LinajeRoutingModule
  ]
})
export class LinajeModule { }
