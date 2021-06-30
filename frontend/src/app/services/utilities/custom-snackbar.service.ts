import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackbarErrorComponent} from '../../components/snackbar/snackbar-error/snackbar-error.component';
import {SnackbarInfoComponent} from '../../components/snackbar/snackbar-info/snackbar-info.component';
import {SnackbarWtfComponent} from '../../components/snackbar/snackbar-wtf/snackbar-wtf.component';
import {SnackbarOkComponent} from '../../components/snackbar/snackbar-ok/snackbar-ok.component';

@Injectable({
    providedIn: 'root'
})
/**
 * Service for snackbars.
 */
export class CustomSnackbarService {

    DURATION = 4000;

    constructor(private snackBar: MatSnackBar) { }

    /**
     * Opens a error-snackbar
     * @param message The message to be shown
     */
    public openErrorMessage(message: string): void {
        const snackBarRef = this.snackBar.openFromComponent(SnackbarErrorComponent, {
            duration: undefined,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: 'error-snackbar',
            data: message

        });

        // @ts-ignore
        snackBarRef.instance.dismissClick.subscribe(() => {
            snackBarRef.dismiss();
        });
    }


    /**
     * Opens a info-snackbar
     * @param message The message to be shown
     */
    public openInfoMessage(message: string): void {
        const snackBarRef = this.snackBar.openFromComponent(SnackbarInfoComponent, {
            duration: undefined,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: 'info-snackbar',
            data: message

        });

        // @ts-ignore
      snackBarRef.instance.dismissClick.subscribe(() => {
            snackBarRef.dismiss();
        });
    }

    /**
     * Opens a ok-snackbar
     * @param message The message to be shown
     */
    public openOkMessage(message: string): void {
        const snackBarRef = this.snackBar.openFromComponent(SnackbarOkComponent, {
            duration: this.DURATION,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: 'ok-snackbar',
            data: message

        });

        // @ts-ignore
      snackBarRef.instance.dismissClick.subscribe(() => {
            snackBarRef.dismiss();
        });
    }

    /**
     * Opens a wtf-snackbar - only to be used when there is a really big issue
     * @param message The message to be shown
     */
    public openWTFMessage(message: string): void {
        const snackBarRef = this.snackBar.openFromComponent(SnackbarWtfComponent, {
            duration: undefined,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: 'wtf-snackbar',
            data: message

        });

        // @ts-ignore
      snackBarRef.instance.dismissClick.subscribe(() => {
            snackBarRef.dismiss();
        });
    }
}
