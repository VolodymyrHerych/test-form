import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormElementsComponent } from './components/form-elements/form-elements.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
