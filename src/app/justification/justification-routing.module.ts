import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JustificationPage } from './justification.page';

const routes: Routes = [
  {
    path: '',
    component: JustificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JustificationPageRoutingModule {}
