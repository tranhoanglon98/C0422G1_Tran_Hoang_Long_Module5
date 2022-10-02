import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service/customer/customer.service";
import {Customer} from "../model/customer/customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[]
  customerToDelete: Customer = new Customer()

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(customers => {
      this.customerList = customers.content
    })
  }

  getInFoToModal(customer: Customer) {
    this.customerToDelete = customer
  }

  delete(id: number) {
    this.customerService.delete(id).subscribe(next => {
      this.ngOnInit()
    })
  }
}
