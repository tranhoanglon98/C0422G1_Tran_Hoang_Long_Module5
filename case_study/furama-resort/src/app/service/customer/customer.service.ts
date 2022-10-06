import {Injectable} from '@angular/core';
import {ICustomer} from "../../model/customer/i-customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(page: number): Observable<any>{
    return this.httpClient.get("http://localhost:8080/customer?page=" + page)
  }

  delete(id: number){
    return this.httpClient.delete("http://localhost:8080/customer/"+id)
  }

  add(customer: ICustomer) {
   return  this.httpClient.post("http://localhost:8080/customer",customer)
  }

  findById(id: number): Observable<any>{
    return this.httpClient.get("http://localhost:8080/customer/" + id)
  }

  getAllCustomerType(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/customer/customerType")
  }

  edit(customer: ICustomer){
    return this.httpClient.patch("http://localhost:8080/customer", customer)
  }
}
