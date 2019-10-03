import { createSymbiote } from "redux-symbiote";
import Immutable from "immutable";

const initialState = new Immutable.Map();

const errorsReducer = {
    set: (state, { fieldName, value }) => state.set(fieldName, value),
    delete: (state, { fieldName }) => state.delete(fieldName),
};

export const { actions:  errorsActions, reducer: errors } = createSymbiote(initialState, errorsReducer);
