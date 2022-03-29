import { applyMiddleware, combineReducers, createStore } from "redux";
import gameReducer from './reducers/gameReducer';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({gameReducer});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;