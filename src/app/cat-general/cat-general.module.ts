import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatGeneralRoutingModule } from './cat-general-routing.module';
import { CatGeneralComponent } from './cat-general.component';


@NgModule({
  declarations: [CatGeneralComponent],
  imports: [
    CommonModule,
    CatGeneralRoutingModule
  ]
})
export class CatGeneralModule { }
