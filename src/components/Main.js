import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Main extends Component {
  render() {
    return (
      <div>
        This is MAIN page<br />
        <br />
        <Link to="/todos">Goto Todos</Link>
      </div>
    );
  };
};

export default Main;
