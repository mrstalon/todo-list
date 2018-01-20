import { createStore } from 'redux';
import { mainReducer, initialState } from '../reducers/reducer';

export const store = createStore(mainReducer, initialState);
