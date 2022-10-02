import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service/customer/customer.service";
import {ICustomer} from "../model/customer/i-customer";
import {ICustomerType} from "../model/customer/i-customer-type";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: ICustomer[]

  constructor(private customerService: CustomerService) {
    this.customerList = customerService.getAllCustomer()
  }

  ngOnInit(): void {
  }

}
