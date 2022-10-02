import {ICustomerType} from "./i-customer-type";

export class Customer {
  id: number
  name: string
  dayOfBirth: string
  gender: boolean
  idCard: string
  phoneNumber: string
  email: string
  customerType: ICustomerType
  address: string


  constructor() {
  }
}
