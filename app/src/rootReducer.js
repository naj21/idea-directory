import { combineReducers } from 'redux';
import auth from 'services/auth/reducers';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
