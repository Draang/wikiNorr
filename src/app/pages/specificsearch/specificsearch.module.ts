import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecificsearchPageRoutingModule } from './specificsearch-routing.module';

import { SpecificsearchPage } from './specificsearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecificsearchPageRoutingModule
  ],
  declarations: [SpecificsearchPage]
})
export class SpecificsearchPageModule {}
