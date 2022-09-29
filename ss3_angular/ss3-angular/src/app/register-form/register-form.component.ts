import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  countries = [{id: 1, name: "Vietnam"}, {id: 2, name: "USA"}, {id: 3, name: "Korea"}, {id: 4, name: "Japan"},]

  constructor() {
  }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    passwordGroup: new FormGroup({
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)])
    }, this.comparePassword),
    country: new FormControl(),
    age: new FormControl("", [Validators.min(18)]),
    gender: new FormControl(),
    phone: new FormControl("", [Validators.required, Validators.pattern("^\\+84\\d{9,10}$")])
  })

  submit() {
    console.log(this.registerForm.value)
  }

  comparePassword(c: AbstractControl) {
    return (c.value.password === c.value.confirmPassword) ? null : {passwordNotMatch: true}
  }
}
