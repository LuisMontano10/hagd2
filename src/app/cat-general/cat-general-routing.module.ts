import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatGeneralComponent } from './cat-general.component';

const routes: Routes = [{ path: '', component: CatGeneralComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatGeneralRoutingModule { }
