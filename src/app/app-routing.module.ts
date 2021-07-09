import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tt1', loadChildren: 'page07022021#Page07022021Module' },
  { path: 'tt2', loadChildren: 'one-day#OneDayModule' },
  { path: 'dd2', loadChildren: 'one-day-2#OneDayModule' },
  { path: 'dd3', loadChildren: 'one-day-3#OneDayModule' },
  { path: '', loadChildren: 'one-day-2#OneDayModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
