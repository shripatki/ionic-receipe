import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceipeDetailPageRoutingModule } from './receipe-detail-routing.module';

import { ReceipeDetailPage } from './receipe-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceipeDetailPageRoutingModule
  ],
  declarations: [ReceipeDetailPage]
})
export class ReceipeDetailPageModule {}
