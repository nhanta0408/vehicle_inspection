import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import isFinishedReducer from './finishedReducers/isFinishedReducer';

const rootReducers = combineReducers({isFinishedReducer: isFinishedReducer});

export const Store = createStore(rootReducers, applyMiddleware(thunk));
