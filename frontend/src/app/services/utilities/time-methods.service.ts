import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
/**
 * Service for every action that relates to time.
 * I hate time.. Why can't everyone just use unix-time?
 */
export class TimeMethodsService {

    constructor() { }

    /**
     * @return The current year as a string in the format: YYYY
     */
    getCurrentYear(): string {
        return moment().format('YYYY');
    }

    /**
     * @return The current month as a string in the format MM
     */
    getCurrentMonth(): string {
        return moment().format('MM');
    }

    /**
     * @return The current monthPeriod, to be used to match with a batch
     */
    getCurrentMonthPeriod(): string {
        return moment().format('YYYYMM');
    }

    /**
     * @return The current quarter period, to be used to match with a batch
     */
    getCurrentQuarterPeriod(): string {
        return moment().format('YYYY[Q]Q');
    }

    /**
     * @return the current quarter number
     */
    getCurrentQuarter(): string {
        return moment().format('Q');
    }

    /**
     * @return the current half year as number. 1 or 2
     */
    getCurrentHalfYear(): number {
        return Number(moment().format('M')) < 7 ? 1 : 2;
    }

    getReadableFormat(date: Date) {
        if (moment(date).isBefore('1000.01.01')) {
            return '-';
        }
        return moment(date).format('DD.MM.YYYY');
    }
}
