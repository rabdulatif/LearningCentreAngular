import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContentComponent } from './app-content/app-content.component';

const routes: Routes = [
  {
    path: "",
    component: AppContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
