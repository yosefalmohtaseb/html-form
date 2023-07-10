import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0
  };

  counteFunction = (step) => {
    this.setState((prevState) => ({
      count: prevState.count + step
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={() => this.counteFunction(1)}>Increment</button>
        <p>Count: {count}</p>
        <button onClick={() => this.counteFunction(-1)}>Decrement</button>
        <button onClick={() => this.ccounteFunction(2)}>Increment</button>
        <p>Count: {count}</p>
        <button onClick={() => this.counteFunction(-2)}>Decrement</button>
        <button onClick={() => this.counteFunction(3)}>Increment</button>
        <p>Count: {count}</p>
        <button onClick={() => this.counteFunction(-3)}>Decrement</button>
      </div>
    );
  }
}
