import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import visibilityFilterReducer from './visibilityFilterReducer';

// combining reducers
export default combineReducers({
    todosReducer,
    visibilityFilterReducer
})