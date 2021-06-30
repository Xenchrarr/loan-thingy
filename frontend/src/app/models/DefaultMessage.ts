import {RequestType} from './Enums';

export class DefaultMessage {

    static saveOk = 'Lagret';
    static saveError = 'Feil, ikke lagret';
    static deleteOk = 'Slettet';
    static deleteError = 'Feil, ikke slettet';
    static addOk = 'Lagt til';
    static addError = 'Kunne ikke legge til';
    static editOk = 'Endret';
    static editError = 'Kunne ikke endre';
    static downLoadOk = 'Ok';
    static downloadError = 'Kunne ikke laste ned';
    static checkOk = '';
    static checkError = '';

    /**
     * Function to return the default values for messages that are shown to the user based on
     * what kind of operation that is tried to complete.
     * @param type what kind of request the message is for
     * @param ok true if it went fine
     */
    static getMessage(type: RequestType, ok = false) {
        switch (type) {
            case RequestType.save: {
                if (ok) {
                    return DefaultMessage.saveOk;
                } else {
                    return DefaultMessage.saveError;
                }
            }

            case RequestType.download: {
                if (ok) {
                    return DefaultMessage.downLoadOk;
                } else {
                    return DefaultMessage.downloadError;
                }
            }

            case RequestType.add: {
                if (ok) {
                    return DefaultMessage.addOk;
                } else {
                    return DefaultMessage.addError;
                }
            }

            case RequestType.check: {
                if (ok) {
                    return DefaultMessage.checkOk;
                } else {
                    return DefaultMessage.checkError;
                }
            }

            case RequestType.delete: {
                if (ok) {
                    return DefaultMessage.deleteOk;
                } else {
                    return DefaultMessage.deleteError;
                }
            }

            case RequestType.edit : {
                if (ok) {
                    return DefaultMessage.editOk;
                } else {
                    return DefaultMessage.editError;
                }
            }
        }
    }
}
