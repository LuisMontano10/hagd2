import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AddRoutingModule
  ]
})
export class AddModule { }
