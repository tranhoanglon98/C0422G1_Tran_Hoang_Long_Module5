import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './component/list/list.component';
import {AddComponent} from './component/add/add.component';
import {EditComponent} from './component/edit/edit.component';


const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
