import {Injectable} from '@angular/core';
import {ICustomer} from "../../model/customer/i-customer";
import {ICustomerType} from "../../model/customer/i-customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerType: ICustomerType[] = [
    {
      id: 1,
      type: 'Diamond'
    },
    {
      id: 2,
      type: 'Platinum'
    },
    {
      id: 3,
      type: 'Gold'
    },
    {
      id: 4,
      type: 'Sliver'
    },
    {
      id: 5,
      type: 'Member'
    }
  ]
  customer: ICustomer[] = [
    {
      id: 1,
      name: 'Trần Hoàng Long',
      dayOfBirth: '03/08/1998',
      gender: true,
      idCard: '0102154865',
      phone: '0901234567',
      email: 'gonoccho@gmail.com',
      customerType: {
        id: 1,
        type: 'Diamond'
      },
      address: 'Thừa Thiên Huế'
    },
    {
      id: 2,
      name: 'Trần Văn Long',
      dayOfBirth: '03/08/1998',
      gender: true,
      idCard: '0104444865',
      phone: '0901555567',
      email: 'tranlong@gmail.com',
      customerType: {
        id: 2,
        type: 'Platinum'
      },
      address: 'Thừa Thiên Huế'
    },
    {
      id: 3,
      name: 'Trần Văn C',
      dayOfBirth: '03/08/1888',
      gender: true,
      idCard: '0102898965',
      phone: '0901111567',
      email: 'tranvanc@gmail.com',
      customerType: {
        id: 1,
        type: 'Diamond'
      },
      address: 'Đà Nẵng'
    },
    {
      id: 4,
      name: 'Trần Thị D',
      dayOfBirth: '03/08/1898',
      gender: false,
      idCard: '0102898965',
      phone: '0901114547',
      email: 'tranthid@gmail.com',
      customerType: {
        id: 5,
        type: 'Member'
      },
      address: 'Quảng Nam'
    },
    {
      id: 5,
      name: 'Trần Văn C',
      dayOfBirth: '03/08/1888',
      gender: true,
      idCard: '0102898965',
      phone: '0901111567',
      email: 'tranvanc@gmail.com',
      customerType: {
        id: 1,
        type: 'Diamond'
      },
      address: 'Đà Nẵng'
    },
    {
      id: 6,
      name: 'Trần Văn E',
      dayOfBirth: '03/05/1888',
      gender: true,
      idCard: '458542365',
      phone: '0909999999',
      email: 'tranvane@gmail.com',
      customerType: {
        id: 3,
        type: 'Gold'
      },
      address: 'Nghệ An'
    }
  ]

  constructor() {
  }

  getAllCustomer(){
    return this.customer
  }

  getAllCustomerType(){
    return this.customerType
  }
}
