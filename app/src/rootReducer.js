import { combineReducers } from 'redux';
import account from 'services/account/reducers';
import message from 'services/messaging/reducers';
import publish from 'services/publish/reducers';

const rootReducer = combineReducers({
  account,
  message,
  publish,
});

export default rootReducer;
