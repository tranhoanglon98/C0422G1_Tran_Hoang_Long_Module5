import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerComponent} from "./customer/customer.component";
import {FacilityComponent} from "./facility/facility.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'facility', component: FacilityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
