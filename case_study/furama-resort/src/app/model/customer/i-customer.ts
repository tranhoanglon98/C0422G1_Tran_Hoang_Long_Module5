import {ICustomerType} from "./i-customer-type";

export interface ICustomer {
  id: number
  name: string
  dayOfBirth: string
  gender: boolean
  idCard: string
  phone: string
  email: string
  customerType: ICustomerType
  address: string
}
