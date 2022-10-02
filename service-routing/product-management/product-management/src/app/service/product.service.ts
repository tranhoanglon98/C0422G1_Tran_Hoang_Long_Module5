import {Injectable} from '@angular/core';
import {IProduct} from "../model/i-product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/product")
  }

  save(product: IProduct): Observable<any> {
   return  this.httpClient.post("http://localhost:3000/product",product)
  }

  edit(product: IProduct){
    return this.httpClient.patch("http://localhost:3000/product/"+product.id,product)
  }

  delete(id: number) {
   return this.httpClient.delete("http://localhost:3000/product/"+id)
  }

  findById(id: number) {
    return this.httpClient.get("http://localhost:3000/product/" + id)
  }

  getAllCategory(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/category")
  }

  findCategoryById(id: number){
    return this.httpClient.get("http://localhost:3000/category/"+id)
  }
}
