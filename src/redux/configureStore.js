import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import covidDataReducer from './covid/covidReducer';

export default createStore(covidDataReducer, applyMiddleware(thunk));
