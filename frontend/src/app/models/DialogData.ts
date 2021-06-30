/**
 * Data passed to a modal
 */
export class DialogData {
    header: string;
    text: string;
    ok: string;
    close: string;

    constructor(
        header: string = 'Er du sikker på at du vil lukke uten å lagre?',
        text: string = 'Endringer som er gjort vil bli forkastet',
        ok: string = 'LAGRE',
        close: string = 'AVVIS'
    ) {
        this.header = header;
        this.text = text;
        this.ok = ok;
        this.close = close;
    }
}
