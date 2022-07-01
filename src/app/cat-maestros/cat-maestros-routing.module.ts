import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatMaestrosComponent } from './cat-maestros.component';

const routes: Routes = [{ path: '', component: CatMaestrosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatMaestrosRoutingModule { }
