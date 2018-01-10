import * as actionType from './ActionType';

export function sample() {
    return {
        type: actionType.SAMPLE,
        test:"this string came from redux"
    };
}