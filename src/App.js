import React from 'react';
import { Router, Route, Switch } from "react-router-dom";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import history from './components/History'
import ProtectedRoute from './components/ProtectedRoute';

import Header from './components/Header';
import SignIn from './components/SignIn';
import Main from './components/Main';
import About from './components/About';
import Todo from './components/Todo';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router history={history} >
        <div>
          <Header />
          <hr />
          <Switch>
            <Route exact path="/" component={SignIn} />
            <ProtectedRoute exact path="/main" component={Main} />
            <ProtectedRoute exact path="/about" component={About} />
            <ProtectedRoute exact path="/todos" component={Todo} />
            <Route path="*">404 Not Found</Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
