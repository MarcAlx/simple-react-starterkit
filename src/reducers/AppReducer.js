import * as actionType from '../actions/ActionType.js';
import * as config from "./Config.js";

export default function AppReducer(state=config.initialState, action) {
    switch (action.type) {
        case actionType.SAMPLE:
            return Object.assign({}, state, {
                test:action.test
            });
        default:
            return state;
    }
}