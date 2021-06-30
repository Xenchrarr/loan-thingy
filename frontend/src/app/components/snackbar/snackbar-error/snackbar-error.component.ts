import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';


@Component({
    selector: 'app-snackbar-error',
    templateUrl: './snackbar-error.component.html',
    styleUrls: ['./snackbar-error.component.scss']
})
export class SnackbarErrorComponent implements OnInit {

    @Output() dismissClick: EventEmitter<void> = new EventEmitter<void>();
    message = '';

    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
        this.message = data != null ? data : 'Error in error message - the message was empty??';
    }

    ngOnInit() {
    }

    dismiss() {
        this.dismissClick.emit();
    }

}
