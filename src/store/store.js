import { createStore } from 'redux';
import { todosReducer, initialState } from '../reducers/reducer';

export const store = createStore(todosReducer, initialState);
