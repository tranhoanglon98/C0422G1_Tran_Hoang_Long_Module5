import {Component, OnInit} from '@angular/core';
import {IProduct} from "../model/i-product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: IProduct[] = []

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(next => {
      this.products = next
    })
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(next => {
      this.ngOnInit()
    })
  }

}
