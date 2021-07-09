import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneDayComponent } from './one-day.component';
import { OneDayDataService } from './action/api/one-day.api.service';

const routes: Routes = [{ path: '', component: OneDayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OneDayDataService]
})
export class OneDayRoutingModule {}
