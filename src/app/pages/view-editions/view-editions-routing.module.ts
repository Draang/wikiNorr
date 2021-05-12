import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEditionsPage } from './view-editions.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEditionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEditionsPageRoutingModule {}
