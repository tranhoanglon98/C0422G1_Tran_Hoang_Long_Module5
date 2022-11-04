import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerComponent} from "./customer/customer.component";
import {FacilityComponent} from "./facility/facility.component";
import {AddCustomerComponent} from "./customer/add-customer/add-customer.component";
import {UpdateCustomerComponent} from "./customer/update-customer/update-customer.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/add', component: AddCustomerComponent},
  {path: 'customer/edit/:id', component: UpdateCustomerComponent},
  {path: 'facility', component: FacilityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
