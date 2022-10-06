import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service/customer/customer.service";
import {ICustomer} from "../model/customer/i-customer";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: ICustomer[]
  customerToDelete: ICustomer
  page = 0
  totalPage: number

  constructor(private customerService: CustomerService) {
    this.getPage(0)
  }

  ngOnInit(): void {

  }

  getPage(currentPage:number){
    this.page = currentPage
    if (this.page < 0){
      this.page = 0
    }else {
      if (this.page > this.totalPage){
        this.page = this.totalPage - 1
      }
    }
    this.customerService.getAllCustomer(this.page).subscribe(customers => {
      this.customerList = customers.content
      this.totalPage = customers.totalPages
    })
  }

  getInFoToModal(customer: ICustomer) {
    this.customerToDelete = customer
  }

  delete(id: number) {
    this.customerService.delete(id).subscribe(next => {
      this.ngOnInit()
    })
  }
}
