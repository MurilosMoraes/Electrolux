import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JustificationPageRoutingModule } from './justification-routing.module';

import { JustificationPage } from './justification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JustificationPageRoutingModule
  ],
  declarations: [JustificationPage]
})
export class JustificationPageModule {}
