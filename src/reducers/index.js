import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import deck from './deck';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  deck
});

export default rootReducer;
