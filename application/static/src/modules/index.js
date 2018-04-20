import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import forms from './forms'

export default combineReducers({
    routing: routerReducer,
    counter,
    forms
})