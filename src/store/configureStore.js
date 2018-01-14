import { createStore, applyMiddleware } from 'redux'
import categoriesList from '../reducers/categories-list'

export default function configureStore(initialState) {
  const store = createStore(categoriesList, initialState);
  return store;
}