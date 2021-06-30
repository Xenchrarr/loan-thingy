import { Injectable } from '@angular/core';
import {LoanService} from '../interfaces/loan-service';
import {LoanType, RequestType} from '../../models/Enums';
import {Loan} from '../../models/Loan';
import {CommunicationService} from '../utilities/communication.service';

@Injectable({
    providedIn: 'root'
})
export class LoanProdService implements LoanService{
    loanEndpoint = 'loan/';
    constructor(private communicationService: CommunicationService) { }

    getLoan(amount: number, years: number, type: LoanType): Promise<Loan> {
        const formData: any = {
            amount,
            year: years,
            loanType: LoanType.house
        };
        return this.communicationService.get(this.loanEndpoint + 'GetLoan', formData, false, RequestType.download);

    }
}
