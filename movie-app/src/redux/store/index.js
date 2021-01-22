import { combineReducers, createStore } from 'redux';
import authReducer from '../reducers/authReducer';
import moviesReducer from '../reducers/moviesReducer';

const reducers = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
});

const store = createStore(reducers);

export default store;
