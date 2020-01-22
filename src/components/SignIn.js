import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authenticate } from '../actions/auth';

class SignIn extends Component {
  handleSignIn = () => {
    this.props.authenticate(true);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleSignIn}>Sign In</button>
      </div>
    )
  }
}

export default connect(null, {
  authenticate,
})(SignIn);
