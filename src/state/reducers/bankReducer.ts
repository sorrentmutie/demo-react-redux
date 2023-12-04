import { Action } from "../actions";

const initialState = 0;

export const bankReducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case 'deposit':
            return state + action.payload 
        case 'withdraw':
            return state - action.payload
        case "bankrupt":
            return 0;
        default:
            return state
    }
}
