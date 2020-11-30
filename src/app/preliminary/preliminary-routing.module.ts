import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreliminaryPage } from './preliminary.page';

const routes: Routes = [
  {
    path: '',
    component: PreliminaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreliminaryPageRoutingModule {}
