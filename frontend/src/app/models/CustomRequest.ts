import {StatusCode} from './Enums';

/**
 * Every request that will be received from netadmin will look like this.
 */
export class CustomRequest {
    statusCode: StatusCode;
    data: any;
    errorMessage: string;

    constructor(json: any) {
        const newJson = JSON.parse(json);
        this.statusCode = newJson.StatusCode;
        this.data = newJson.Data;
        this.errorMessage = newJson.ErrorMessage;
    }
}
