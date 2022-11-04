import {IClass} from './i-class';
import {IType} from './i-type';
import {IReason} from './i-reason';

export interface IBonusPenalty {
  id: number;
  date: string;
  status: boolean;
  type: IType;
  reason: IReason;
}
