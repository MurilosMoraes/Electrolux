import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionPage } from './section.page';

const routes: Routes = [
  {
    path: '',
    component: SectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionPageRoutingModule {}
