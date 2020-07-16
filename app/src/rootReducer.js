import { combineReducers } from 'redux';
import auth from 'services/auth/reducers';
import message from 'services/messaging/reducers';
import reducer from 'services/reducers';

const rootReducer = combineReducers({
  auth,
  message,
  reducer,
});

export default rootReducer;
