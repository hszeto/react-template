import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import Main from './components/Main';
import Todo from './components/Todo';

const browserHistory = createBrowserHistory();
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router history={browserHistory} >
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/todos" component={Todo} />
            <Route path="*">404 Not Found</Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
