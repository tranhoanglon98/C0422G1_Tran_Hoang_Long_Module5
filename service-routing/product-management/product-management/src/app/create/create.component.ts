import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: FormGroup = new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required)
  })

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewProduct(){
    if (this.product.valid){
      this.productService.addNewProduct(this.product.value)
      this.router.navigateByUrl('')
    }
  }

}
