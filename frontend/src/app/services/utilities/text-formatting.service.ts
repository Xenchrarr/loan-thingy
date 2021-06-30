import { Injectable } from '@angular/core';
import {TimeMethodsService} from './time-methods.service';
import {EnumDictionary} from '../../models/Types';

@Injectable({
    providedIn: 'root'
})
export class TextFormattingService {

    constructor(private timeMethods: TimeMethodsService) { }


    getCommaSeparation(value, fractionDigits: number = 2): string {
        return ((Math.round(value * 100) / 100).toFixed(fractionDigits).toString().replace('.', ','));
    }

    getCommaSeparationWithThousandSeparator(value, fractionDigits: number = 2): string {
        return (Math.round(value * 100) / 100).toFixed(fractionDigits).toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ').replace('.', ',');
    }

    getReadableDate(date): string {
        return this.timeMethods.getReadableFormat(date);
    }





}
