import { combineReducers } from 'redux';
import auth from 'services/auth/reducers';
import message from 'services/messaging/reducers';
import comment from 'services/comment/reducers';
import idea from 'services/idea/reducers';

const rootReducer = combineReducers({
  auth,
  message,
  comment,
  idea,
});

export default rootReducer;
