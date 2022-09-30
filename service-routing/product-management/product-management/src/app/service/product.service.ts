import {Injectable} from '@angular/core';
import {IProduct} from "../model/i-product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[] = [
    {
      id: 1,
      name: 'Tông Lào',
      price: 50000,
      description: 'màu xanh, bền như cái mền'
    },
    {
      id: 2,
      name: 'Nokia cục gạch',
      price: 2000000,
      description: 'ném chó chó chết'
    }, {
      id: 3,
      name: 'laptop dell',
      price: 54440000,
      description: 'như mới (30%)'
    }, {
      id: 4,
      name: 'thảm trải sàn Codegym',
      price: 2,
      description: 'thúi um'
    }
  ]

  constructor() {
  }

  getAll() {
    return this.products
  }

  addNewProduct(product: IProduct) {
    this.products.push(product)
  }

  delete(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        this.products.splice(i, 1)
        break
      }
    }
  }

  findById(id: number) {
    return this.products.filter(w => w.id == id)[0]
  }

  save(product: any) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == product.id) {
        this.products[i] = product
        break
      }
    }
  }
}
