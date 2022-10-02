import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer/customer.service";
import {ICustomerType} from "../../model/customer/i-customer-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup

  constructor(private customerService: CustomerService,private router: Router) {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      dayOfBirth: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      customerType: new FormGroup({
        id: new FormControl()
      }),
      address: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  add() {
    console.log(this.customerForm.value)
    this.customerService.add(this.customerForm.value).subscribe(next => {
      this.router.navigateByUrl("customer")
    })
  }
}
