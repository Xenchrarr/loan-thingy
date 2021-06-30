/**
 * One error message that is found on one batch
 */
import {ErrorSeverity} from './Enums';

export class ErrorMessage {
    id: number;
    customerId: string;
    errorMessage: string;
    isFixed: boolean;
    severity: ErrorSeverity;
    batchId: string;
    correctedBy: string;
    invoiceId: number;

    constructor(object: any = null) {
        if (object !== null) {
            this.id = object.Id;
            this.customerId = object.CustomerId;
            this.errorMessage = object.Text;
            this.isFixed = object.Corrected;
            this.severity = object.Severity;
            this.batchId = object.BatchId;
            this.invoiceId = object.InvoiceId;
            this.correctedBy = object.CorrectedBy;

        }
    }
}
