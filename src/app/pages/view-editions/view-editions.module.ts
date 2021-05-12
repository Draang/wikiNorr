import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEditionsPageRoutingModule } from './view-editions-routing.module';

import { ViewEditionsPage } from './view-editions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEditionsPageRoutingModule
  ],
  declarations: [ViewEditionsPage]
})
export class ViewEditionsPageModule {}
