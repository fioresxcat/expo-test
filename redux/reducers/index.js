import { combineReducers } from 'redux';
import postReducer from './post';
import authReducers from './auth';

const rootReducer = combineReducers({
    posts: postReducer,
    auth: authReducers
});

export default rootReducer;
