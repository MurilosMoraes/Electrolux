import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreliminaryPageRoutingModule } from './preliminary-routing.module';

import { PreliminaryPage } from './preliminary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreliminaryPageRoutingModule
  ],
  declarations: [PreliminaryPage]
})
export class PreliminaryPageModule {}
