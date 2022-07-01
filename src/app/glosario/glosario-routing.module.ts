import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlosarioComponent } from './glosario.component';

const routes: Routes = [{ path: '', component: GlosarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlosarioRoutingModule { }
