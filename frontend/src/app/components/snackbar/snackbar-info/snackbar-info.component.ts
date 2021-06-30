import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
    selector: 'app-snackbar-info',
    templateUrl: './snackbar-info.component.html',
    styleUrls: ['./snackbar-info.component.scss']
})
export class SnackbarInfoComponent implements OnInit {

    @Output() dismissClick: EventEmitter<void> = new EventEmitter<void>();
    message = '';

    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
        this.message = data != null ? data : 'No message';
    }

    ngOnInit() {
    }

    dismiss() {
        this.dismissClick.emit();
    }

}
