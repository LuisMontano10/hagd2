import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentosComponent } from './documentos.component';


@NgModule({
  declarations: [DocumentosComponent],
  imports: [
    CommonModule,
    DocumentosRoutingModule
  ]
})
export class DocumentosModule { }
