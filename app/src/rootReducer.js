import { combineReducers } from 'redux';
import auth from 'services/auth/reducers';
import message from 'services/messaging/reducers';

const rootReducer = combineReducers({
  auth,
  message,
});

export default rootReducer;
