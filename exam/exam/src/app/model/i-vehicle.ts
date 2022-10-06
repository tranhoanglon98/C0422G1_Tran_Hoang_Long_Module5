import {IAddress} from './i-address';

export interface IVehicle {
  id: number;
  numberPalate: string;
  type: string;
  name: string;
  from: IAddress;
  to: IAddress;
  phone: string;
  email: string;
  startTime: string;
  endTime: string;
}
