export class Payment {
    interestAmount: number;
    payAmount: number;
    totalAmount: number;
    monthNumber: number;
    remainingAfter: number;


    constructor(object: any = null) {
        if (object !== null) {
            this.interestAmount = object.interestAmount;
            this.payAmount = object.payAmount;
            this.totalAmount = object.totalAmount;
            this.monthNumber = object.monthNumber;
            this.remainingAfter = object.remainingAfter;
        }
    }
}
