import { combineReducers } from 'redux';
import login from 'services/auth/reducers';

const rootReducer = combineReducers({
  login,
});

export default rootReducer;
