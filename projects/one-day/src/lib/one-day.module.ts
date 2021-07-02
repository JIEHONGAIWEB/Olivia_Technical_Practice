import { NgModule } from '@angular/core';
import { OneDayComponent } from './one-day.component';

import { OneDayRoutingModule } from './one-day-routing.module'

@NgModule({
  declarations: [
    OneDayComponent
  ],
  imports: [
    OneDayRoutingModule
  ],
  exports: [
    OneDayComponent
  ]
})
export class OneDayModule { }
