import React from 'react';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Todo from './components/Todo';

const browserHistory = createBrowserHistory();
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router history={browserHistory} >
        <div>
          <Header />
          <hr />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/todos" component={Todo} />
            <Route path="*">404 Not Found</Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
