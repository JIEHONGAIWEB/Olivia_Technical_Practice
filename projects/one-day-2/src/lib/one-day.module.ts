import { NgModule } from '@angular/core';
import { OneDayComponent } from './one-day.component';
import { CardContentComponent } from './subComponent/card-content/card-content.component';
import { OneDayRoutingModule } from './one-day-routing.module';
import { TitleComponent } from './subComponent/title/title.component';
import { SubTitleComponent } from './subComponent/subtitle/subtitle.component';
import { HtmlPipe } from './innerhtml.pipe';

import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { PrimengModule } from './primeng.module';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    OneDayComponent,
    TitleComponent,
    CardContentComponent,
    SubTitleComponent,
    HtmlPipe
  ],
  imports: [OneDayRoutingModule, CommonModule, MaterialModule, PrimengModule],
  exports: [OneDayComponent],
  providers: [MessageService]
})
export class OneDayModule {}
