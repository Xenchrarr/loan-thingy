import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../../models/DialogData';

@Component({
    selector: 'app-dialog-standard',
    templateUrl: './dialog-standard.component.html',
    styleUrls: ['./dialog-standard.component.scss']
})
export class DialogStandardComponent implements OnInit {

    @Output() saveEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(public dialogRef: MatDialogRef<DialogStandardComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    ngOnInit() {
    }

    close(): void {
        this.dialogRef.close();
    }

    save() {
        this.saveEmitter.emit(true);
    }
}
