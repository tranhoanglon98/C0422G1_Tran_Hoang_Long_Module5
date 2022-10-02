import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  categories: any[]
  product: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  })

  constructor(private productService: ProductService, private router: Router) {
    this.productService.getAllCategory().subscribe(next=>{
      this.categories = next
    })
  }

  ngOnInit(): void {
  }

  addNewProduct() {
    this.productService.save(this.product.value).subscribe(next => {
      this.router.navigateByUrl('')
    })
  }

}
