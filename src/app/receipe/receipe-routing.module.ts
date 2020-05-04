import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipePage } from './receipe.page';

const routes: Routes = [
  {
    path: '',
    component: ReceipePage
  },
  {
    path: ':receipeId',
    loadChildren: () => import('./receipe-detail/receipe-detail.module').then( m => m.ReceipeDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceipePageRoutingModule {}
