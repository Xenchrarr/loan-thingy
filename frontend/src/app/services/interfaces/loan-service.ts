import {Injectable} from '@angular/core';
import {LoanType} from '../../models/Enums';
import {Loan} from '../../models/Loan';

@Injectable()
export abstract class LoanService {

  abstract getLoan(amount: number, years: number, type: LoanType): Promise<Loan>;

}
