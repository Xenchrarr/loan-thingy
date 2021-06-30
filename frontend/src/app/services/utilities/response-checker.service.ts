import {Injectable} from '@angular/core';
import {CustomSnackbarService} from './custom-snackbar.service';
import {CustomRequest} from '../../models/CustomRequest';
import {RequestItem, RequestType, StatusCode} from '../../models/Enums';

@Injectable({
    providedIn: 'root'
})
export class ResponseCheckerService {

    constructor(private snackBarService: CustomSnackbarService) { }

    public checkResponse(response: CustomRequest, shouldOpenOnOk: boolean = false, type: RequestType, item: RequestItem): any {


        if (response.statusCode === StatusCode.Ok) {
            if (shouldOpenOnOk) {
                this.handleOkResponse();
            }
        } else if (response.statusCode === StatusCode.Warning) {
            this.handleWarningResponse();
        } else if (response.statusCode === StatusCode.Error) {
            this.handleErrorResponse();
        } else if (response.statusCode === StatusCode.WTF) {
            this.handleWTFResponse();
        } else {
            this.handleUnknownResponse();
        }

    }

    private handleOkResponse() {

    }

    private handleErrorResponse() {

    }


    private handleWarningResponse() {

    }


    private handleWTFResponse() {

    }

    private handleUnknownResponse() {

    }

}
