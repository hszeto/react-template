import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { authenticate } from '../actions/auth';

class Header extends Component {
  handleSignOut = () => {
    this.props.authenticate(false);
  };

  render() {
    return (
      <div>
        {
          this.props.isAuthenticated ? (
            <div>
              Header Menu &nbsp;&nbsp;&nbsp;
              <Link to="/main">Main</Link>&nbsp;
              <Link to="/todos">Todos</Link>&nbsp;
              <Link to="/about">About</Link>&nbsp;
              <button onClick={this.handleSignOut}>Sign Out</button>
            </div>
          ) : (
              <div>Welcome. Please sign in.</div>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    isAuthenticated: state.auth,
  })
};

export default connect(mapStateToProps, {
  authenticate,
})(Header);
