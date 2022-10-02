import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Customer} from "../../model/customer/customer";
import {ICustomerType} from "../../model/customer/i-customer-type";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
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
  customerEdit: Customer
  customerTypes: ICustomerType[]
  id: number

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.customerService.getAllCustomerType().subscribe(typeList => {
      this.customerTypes = typeList
    })

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id')
      this.findById()
    })
  }

  ngOnInit(): void {
  }

  findById() {
    this.customerService.findById(this.id).subscribe(customer => {
      this.customerEdit = customer
    }, error => {
    }, () => {
      this.getForm()
    })
  }

  getForm() {
    this.customerForm = new FormGroup({
      id: new FormControl(this.customerEdit.id),
      name: new FormControl(this.customerEdit.name),
      dayOfBirth: new FormControl(this.customerEdit.dayOfBirth),
      gender: new FormControl(this.customerEdit.gender),
      idCard: new FormControl(this.customerEdit.idCard),
      phoneNumber: new FormControl(this.customerEdit.phoneNumber),
      email: new FormControl(this.customerEdit.email),
      customerType: new FormGroup({
        id: new FormControl(this.customerEdit.customerType.id)
      }),
      address: new FormControl(this.customerEdit.address)
    })
  }

  edit() {
    this.customerService.edit(this.customerForm.value).subscribe(next => {
      this.router.navigateByUrl("customer")
    })
  }
}
