import {createStore} from 'redux';
import {todosReducer, initialState} from '../reducers/reducer';

console.log(initialState)

export const store = createStore(todosReducer, initialState);
