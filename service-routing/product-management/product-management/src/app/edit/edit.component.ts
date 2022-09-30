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

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router:Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = parseInt(paramMap.get('id'))
      this.product = productService.findById(id);
      this.productForm = new FormGroup({
        id: new FormControl(this.product.id,Validators.required),
        name: new FormControl(this.product.name,Validators.required),
        price: new FormControl(this.product.price,Validators.required),
        description: new FormControl(this.product.description,Validators.required)
      })
    })
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.productForm.value)
    this.productService.save(this.productForm.value)
    this.router.navigateByUrl('')
  }
}
