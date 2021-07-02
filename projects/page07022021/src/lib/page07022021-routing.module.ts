import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page07022021Component } from './page07022021.component';


const routes: Routes = [
  { path: '', component: Page07022021Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page07022021RoutingModule { }