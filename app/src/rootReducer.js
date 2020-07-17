import { combineReducers } from 'redux';
import auth from 'services/auth/reducers';
import message from 'services/messaging/reducers';
import publish from 'services/publish/reducers';

const rootReducer = combineReducers({
  auth,
  message,
  publish,
});

export default rootReducer;
