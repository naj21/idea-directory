import { combineReducers } from 'redux';
import account from 'services/account/reducers';
import message from 'services/messaging/reducers';
import comment from 'services/comment/reducers';
import idea from 'services/idea/reducers';

const rootReducer = combineReducers({
  account,
  message,
  comment,
  idea,
});

export default rootReducer;
