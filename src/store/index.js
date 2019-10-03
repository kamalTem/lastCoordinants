import { combineReducers } from 'redux';
import { placeInfoReducer } from './place-info';
import { errors } from './errors';

export const reducer = combineReducers({
    placeInfoReducer,
    errors
})