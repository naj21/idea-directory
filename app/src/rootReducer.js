import { combineReducers } from 'redux';
import auth from 'services/auth/reducers';
import message from 'services/messaging/reducers';
import commentReducer from 'services/comment/reducers';
import idea from 'services/idea/reducers';

const rootReducer = combineReducers({
  auth,
  message,
  commentReducer,
  idea,
});

export default rootReducer;
