import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import isFinishedReducer from './reducers';

const rootReducers = combineReducers({isFinishedReducer});

export const Store = createStore(rootReducers, applyMiddleware(thunk));
