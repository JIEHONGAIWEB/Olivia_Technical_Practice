import { NgModule } from '@angular/core';
import { OneDayComponent } from './one-day.component';
import { OneDayRoutingModule } from './one-day-routing.module';
import { HtmlPipe } from './innerhtml.pipe';

import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { PrimengModule } from './primeng.module';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    OneDayComponent,
    HtmlPipe
  ],
  imports: [OneDayRoutingModule, CommonModule, MaterialModule, PrimengModule],
  exports: [OneDayComponent],
  providers: [MessageService]
})
export class OneDayModule {}
