import {Component, OnInit} from '@angular/core';
import {Loan} from '../../models/Loan';
import {LoanService} from '../../services/interfaces/loan-service';
import {LoanType} from '../../models/Enums';
import {TextFormattingService} from '../../services/utilities/text-formatting.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    numberOfYears = 25;
    amount = 1000000;
    loan: Loan = null;

    constructor(private loanService: LoanService,
                private textFormatter: TextFormattingService) { }

    ngOnInit(): void {
        this.downloadLoan();
    }

    downloadLoan(): void {
        this.loanService.getLoan(this.amount, this.numberOfYears, LoanType.house).then(data => {
            this.loan = data;
        });
    }

    getPrettyNumber(value: number): string{
        return this.textFormatter.getCommaSeparationWithThousandSeparator(value);
    }

}
