import {ICustomerType} from './i-customer-type';

export interface ICustomer {
  id: number;
  name: string;
  dayOfBirth: string;
  customerType: ICustomerType;
}
