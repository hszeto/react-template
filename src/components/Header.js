import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        Header Menu &nbsp;&nbsp;&nbsp;
        <Link to="/">Home</Link>&nbsp;
        <Link to="/todos">Todos</Link>&nbsp;
        <Link to="/about">About</Link>&nbsp;
      </div>
    );
  }
}

export default Header;
