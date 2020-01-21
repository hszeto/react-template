import { combineReducers } from 'redux';
import data from './data';

const appReducer = combineReducers({
  data
});

export default (state, action) => {
  // if ( action.type === SIGN_OUT ) {
  //   state = undefined;
  // }

  return appReducer(state, action)
};
