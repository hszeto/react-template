import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/data';

export class Todo extends Component {
  state = {
    todoId: ''
  }

  handleInputChange = event => {
    this.setState({ todoId: event.target.value })
  }

  handleGetData = () => {
    this.props.getData(this.state.todoId);
  };

  render() {
    return (
      <div>
        Todos from JSONPlaceholder<br />
        Pick todo id from 1 to 100<br />
        <input onChange={e => this.handleInputChange(e)} />
        <button onClick={this.handleGetData}>Click</button><br />
        <br />
        {
          (Object.keys(this.props.data).length > 0) &&
          <div>
            User Id:{this.props.data.userId}<br />
            Todo Id:{this.props.data.id}<br />
            Title: {this.props.data.title}<br />
            Completed: {`${this.props.data.completed}`}<br />
          </div>
        }
      </div>
    );
  };
};


const mapStateToProps = (state) => {
  console.log(state.data);
  return ({
    data: state.data
  })
};

export default connect(mapStateToProps, {
  getData
})(Todo);
