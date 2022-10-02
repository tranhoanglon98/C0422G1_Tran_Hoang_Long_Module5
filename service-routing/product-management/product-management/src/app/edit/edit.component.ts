import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IProduct} from "../model/i-product";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: IProduct
  productForm: FormGroup
  categories: any
  id: number

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(paramMap.get('id'))
    })
    
    this.productService.getAllCategory().subscribe(next => {
      this.categories = next
    })
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.productService.findById(this.id).subscribe(
      next => {
        this.product = next
      },
      error => {
      },
      () => {
        this.getForm()
      });
  }

  getForm() {
    this.productForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name, Validators.required),
      price: new FormControl(this.product.price, Validators.required),
      description: new FormControl(this.product.description, Validators.required),
      category: new FormControl(this.product.category.id)
    })
  }

  save() {
    const product = this.productForm.value
    console.log(product)
    this.productService.findCategoryById(product.category).subscribe(next => {
      product.category = next
      this.productService.edit(product).subscribe(next => {
        this.router.navigateByUrl('')
      })
    })
  }
}
