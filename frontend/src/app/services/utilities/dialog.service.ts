import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogStandardComponent} from '../../components/dialog/dialog-standard/dialog-standard.component';
import {DialogData} from '../../models/DialogData';

@Injectable({
    providedIn: 'root'
})

/**
 * Service for opening a basic modal.
 */
export class DialogService {

    constructor(public dialog: MatDialog) { }

    /**
     * This will open a simple modal with two buttons.
     * @param header The header text in the modal
     * @param text The info text in the modal
     * @param ok The text in the ok-button
     * @param close The text in the close-button
     */
    openDialog(header?: string, text?: string, ok?: string, close?: string): Promise<boolean> {
        const dialogRef = this.dialog.open(DialogStandardComponent, {
            width: '600px',
            data: new DialogData(header, text, ok, close)
        });

        return dialogRef.afterClosed().toPromise().then(result => {
            return result;
        });
    }
}
