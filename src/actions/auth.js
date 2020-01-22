import history from '../components/History'

export const authenticate = isAuthenticated => {
  return dispatch => {
    if (isAuthenticated) {
      history.push('/main');

      return dispatch({
        type: 'SIGN_IN'
      });
    }

    history.push('/');

    return dispatch({
      type: 'SIGN_OUT'
    });
  };
};
