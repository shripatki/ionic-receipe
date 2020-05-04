import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipeDetailPage } from './receipe-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ReceipeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceipeDetailPageRoutingModule {}
