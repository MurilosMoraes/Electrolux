import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordPageRoutingModule } from './record-routing.module';

import { RecordPage } from './record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordPageRoutingModule
  ],
  declarations: [RecordPage]
})
export class RecordPageModule {}
