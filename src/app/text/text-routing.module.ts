import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextPage } from './text.page';

const routes: Routes = [
  {
    path: '',
    component: TextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextPageRoutingModule {}
