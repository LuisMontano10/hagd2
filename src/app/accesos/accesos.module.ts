import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesosRoutingModule } from './accesos-routing.module';
import { AccesosComponent } from './accesos.component';


@NgModule({
  declarations: [AccesosComponent],
  imports: [
    CommonModule,
    AccesosRoutingModule
  ]
})
export class AccesosModule { }
