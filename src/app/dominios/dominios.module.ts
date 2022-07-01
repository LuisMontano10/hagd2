import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DominiosRoutingModule } from './dominios-routing.module';
import { DominiosComponent } from './dominios.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [DominiosComponent],
  imports: [
    CommonModule,
    DominiosRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class DominiosModule { }
