import { combineReducers } from 'redux';
import auth from './auth';
import data from './data';

const appReducer = combineReducers({
  auth,
  data
});

export default (state, action) => {
  if (action.type === 'SIGN_OUT') {
    state = undefined;
  }

  return appReducer(state, action)
};
