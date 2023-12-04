import { combineReducers } from 'redux';
import { bankReducer } from './bankReducer';
export const reducers = combineReducers({
    bank: bankReducer
})

export default reducers;
export type State = ReturnType<typeof reducers>