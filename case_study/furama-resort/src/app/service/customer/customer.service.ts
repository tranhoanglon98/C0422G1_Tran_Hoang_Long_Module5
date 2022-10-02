import {Injectable} from '@angular/core';
import {Customer} from "../../model/customer/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/customer")
  }

  delete(id: number){
    return this.httpClient.delete("http://localhost:8080/customer/"+id)
  }

  add(customer: Customer) {
   return  this.httpClient.post("http://localhost:8080/customer",customer)
  }

  findById(id: number): Observable<any>{
    return this.httpClient.get("http://localhost:8080/customer/" + id)
  }

  getAllCustomerType(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/customer/customerType")
  }

  edit(customer: Customer){
    return this.httpClient.patch("http://localhost:8080/customer", customer)
  }
}
