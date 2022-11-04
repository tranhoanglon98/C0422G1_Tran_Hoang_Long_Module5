import {IClass} from './i-class';
import {IBonusPenalty} from './i-bonus-penalty';

export interface IStudent {
  id: number;
  name: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
  idCard: string;
  codeGymClass: IClass;
  bonusPenaltyList: IBonusPenalty[];
}
