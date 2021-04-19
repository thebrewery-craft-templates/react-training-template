/**
 *
 * Task1
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { catFacts } from 'utils/cats';

class Task1 extends React.Component {
  state = { counter: 0 };

  componentDidMount() {
    this.timerID = setInterval(() => this.next(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  next = () => {
    if (this.state.counter + 1 < catFacts.length) {
      return this.setState(prevState => ({
        counter: prevState.counter + 1,
      }));
    }

    return this.setState({
      counter: 0,
    });
  };

  prev = () => {
    if (this.state.counter > 0) {
      return this.setState(prevState => ({
        counter: prevState.counter - 1,
      }));
    }

    return this.setState({
      counter: catFacts.length - 1,
    });
  };

  render() {
    return (
      <div style={{ width: '50%', padding: '10px', margin: '0 auto' }}>
        <h1 style={{ height: '150px' }}> {catFacts[this.state.counter]} </h1>
        <button type="button" onClick={this.prev}>
          {'<< prev'}
        </button>
        <button type="button" onClick={this.next}>
          {'next>>'}
        </button>
      </div>
    );
  }
}

export default Task1;
