import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../model/i-customer';
import {ICustomerType} from '../model/i-customer-type';
import {IVehicle} from '../model/i-vehicle';
import {IAddress} from '../model/i-address';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IVehicle[]> {
    return this.httpClient.get<IVehicle[]>('http://localhost:3000/vehicle');
  }

  edit(vehicle: IVehicle) {
    return this.httpClient.patch('http://localhost:3000/vehicle/' + vehicle.id, vehicle);
  }

  findById(id: number): Observable<IVehicle> {
    return this.httpClient.get<IVehicle>('http://localhost:3000/vehicle/' + id);
  }

  getAllAddress(): Observable<IAddress[]> {
    return this.httpClient.get<IAddress[]>('http://localhost:3000/address');
  }

  findAddressById(id: number): Observable<IAddress> {
    return this.httpClient.get<IAddress>('http://localhost:3000/address/' + id);
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/vehicle/' + id);
  }
}
