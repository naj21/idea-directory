import { combineReducers } from 'redux';
import auth from 'services/auth/reducers';
import message from 'services/messaging/reducers';
import publish from 'services/publish/reducers';
import commentReducer from 'services/comment/reducers';

const rootReducer = combineReducers({
  auth,
  message,
  publish,
  commentReducer,
});

export default rootReducer;
