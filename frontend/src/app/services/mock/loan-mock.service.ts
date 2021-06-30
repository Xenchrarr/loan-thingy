import { Injectable } from '@angular/core';
import {LoanService} from '../interfaces/loan-service';
import {LoanType} from '../../models/Enums';
import {Loan} from '../../models/Loan';

@Injectable({
  providedIn: 'root'
})
export class LoanMockService implements LoanService{

  constructor() { }

  getLoan(amount: number, years: number, type: LoanType): Promise<Loan> {
    return Promise.resolve(undefined);
  }
}
