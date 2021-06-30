import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CustomRequest} from '../../models/CustomRequest';
import {RequestType, StatusCode} from '../../models/Enums';
import {CustomSnackbarService} from './custom-snackbar.service';
import {DefaultMessage} from '../../models/DefaultMessage';
@Injectable({
    providedIn: 'root'
})
/**
 * Service that will handle all of the communication
 */
export class CommunicationService {

  API_URL = 'api/';

    constructor(private httpClient: HttpClient,
                private snackBarService: CustomSnackbarService) { }



    /**
     * Method to check the response from the server to decide if the request was successfull or not.
     * @param response - The response from the mvc controller - should be as CustomRequest.
     * The method returns the data if everything was successful on the server side.
     * If not - it will return null
     * @param shouldOpenOnOk Just a flag to turn off message when a download went fine.
     * @param type What type of request - used to define the messages on success/fail
     * @param item Just a string that are to be used to change the messages. example, loan
     */
    private checkResponse(response: CustomRequest, shouldOpenOnOk: boolean = false, type?: RequestType, item?: string): any {
        console.log(response);
        if (response.statusCode === StatusCode.Ok) {
            if (shouldOpenOnOk) {
                this.snackBarService.openOkMessage(DefaultMessage.getMessage(type, true));
            }
            return response.data;
        } else if (response.statusCode === StatusCode.Error) {
            this.snackBarService.openErrorMessage(
                DefaultMessage.getMessage(type, false) + ' - ' + response.errorMessage + ' - ' + (item !== undefined ? item : ''));
            return null;
        } else if (response.statusCode === StatusCode.Warning) {
            this.snackBarService.openInfoMessage(response.errorMessage);
            return response.data;
        } else if (response.statusCode === StatusCode.WTF) {
            this.snackBarService.openWTFMessage(response.errorMessage);
            return null;
        } else {
            this.snackBarService.openWTFMessage('Fant ikke backend?');
            return null;
        }
    }

    /**
     * Post to the controller
     * @param endpoint which function to hit in the controller
     * @param data key:value type of data that are to be sent in the post request.
     * @param shouldOpenOnOk Just a flag to turn off message when a download went fine.
     * @param type What type of request - used to define the messages on success/fail
     * @param item Just a string that are to be used to change the messages. example, batch
     */
    public get(endpoint: string, data: any, shouldOpenOnOk = false, type?: RequestType, item?: string): Promise<any> {
        if (data === undefined || data === null) {
            data = {};
        }
        console.log(data);
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return  this.httpClient.post(this.API_URL + endpoint, JSON.stringify(data), { headers}).toPromise().then(result => {
            return this.checkResponse(new CustomRequest(result), shouldOpenOnOk, type, item);
        }).catch(error => {
            console.log(error.message);
            this.snackBarService.openWTFMessage(error.message);
            return null;
        });
    }


}
