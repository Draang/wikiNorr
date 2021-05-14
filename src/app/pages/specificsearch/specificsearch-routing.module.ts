import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecificsearchPage } from './specificsearch.page';

const routes: Routes = [
  {
    path: '',
    component: SpecificsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecificsearchPageRoutingModule {}
