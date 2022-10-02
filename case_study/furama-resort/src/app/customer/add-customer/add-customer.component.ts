import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer/customer.service";
import {ICustomerType} from "../../model/customer/i-customer-type";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup

  constructor(private customerService: CustomerService) {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      dayOfBirth: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      customerType: new FormControl(),
      address: new FormControl()
    })
  }

  ngOnInit(): void {
  }

}
