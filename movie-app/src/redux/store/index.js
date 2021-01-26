import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import moviesReducer from '../reducers/moviesReducer';

const reducers = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
