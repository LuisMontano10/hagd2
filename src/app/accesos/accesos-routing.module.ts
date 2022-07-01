import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesosComponent } from './accesos.component';

const routes: Routes = [{ path: '', component: AccesosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesosRoutingModule { }
