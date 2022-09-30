import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from "./page/page.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'page'},
  {path: 'page', component: PageComponent},
  {path: 'detail/:word',component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
