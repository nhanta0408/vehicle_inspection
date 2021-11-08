import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import isFinishedReducer from './finishedReducers/isFinishedReducer';
import inspectReducer from './inspectReducers/inspectReducer';
const rootReducers = combineReducers({
  isFinishedReducer: isFinishedReducer,
  inspectReducer: inspectReducer,
});

export const Store = createStore(rootReducers, applyMiddleware(thunk));
