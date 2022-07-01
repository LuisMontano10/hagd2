import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinajeComponent } from './linaje.component';

const routes: Routes = [{ path: '', component: LinajeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinajeRoutingModule { }
