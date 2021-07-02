import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneDayComponent } from './one-day.component';


const routes: Routes = [
  { path: '', component: OneDayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneDayRoutingModule { }