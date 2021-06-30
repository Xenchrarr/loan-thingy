import {Payment} from './Payment';

export class Loan {
    interest: number;
    averageMonthlyPayment: number;
    payments: Payment[];


    constructor(object: any = null) {
        if (object !== null) {
            this.interest = object.interest;
            this.averageMonthlyPayment = object.averageMonthlyPayment;


            this.payments = [];
            if (object.payments !== undefined) {
                for (const item of object.payments) {
                    this.payments.push(new Payment(item));
                }
            }

        }
    }
}
