import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import coinsReducer from './coins/coins';
import globalCryptoReducer from './global/global';

const reducer = combineReducers({
  globalCryptoReducer,
  coinsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
