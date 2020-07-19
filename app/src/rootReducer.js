import { combineReducers } from 'redux';
import auth from 'services/auth/reducers';
import message from 'services/messaging/reducers';
import idea from 'services/idea/reducers';

const rootReducer = combineReducers({
  auth,
  message,
  idea,
});

export default rootReducer;
