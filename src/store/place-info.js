import { createSymbiote } from 'redux-symbiote';

const initialState = {
    byGoogle: []
};

const placeInfo = {
    updateResponseByGoogle: (state, byGoogle) => ({ ...state, byGoogle }),
};

export const { actions:  placeInfoAction, reducer: placeInfoReducer } = createSymbiote(initialState, placeInfo)
