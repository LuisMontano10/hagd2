import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlosarioRoutingModule } from './glosario-routing.module';
import { GlosarioComponent } from './glosario.component';


@NgModule({
  declarations: [GlosarioComponent],
  imports: [
    CommonModule,
    GlosarioRoutingModule
  ]
})
export class GlosarioModule { }
