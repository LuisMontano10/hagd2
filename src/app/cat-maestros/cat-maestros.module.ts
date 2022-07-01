import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatMaestrosRoutingModule } from './cat-maestros-routing.module';
import { CatMaestrosComponent } from './cat-maestros.component';


@NgModule({
  declarations: [CatMaestrosComponent],
  imports: [
    CommonModule,
    CatMaestrosRoutingModule
  ]
})
export class CatMaestrosModule { }
