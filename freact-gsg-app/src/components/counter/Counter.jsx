import { Component } from "react";

export default class Counter extends Component {
    state = {
      count: 0
    };
  
    incrementCount = (e) => {
      this.setState((prevState) => ({
        count: prevState.count + e
      }));
    };
  
    decrementCount = (e) => {
      this.setState((prevState) => ({
        count: prevState.count - e
      }));
    };
  
    render() {
      const { count } = this.state;
  
      return (
        <div>
          <button onClick={this.decrementCount}>-</button>
          <div>{count}</div>
          <button onClick={this.incrementCount}>+</button>
        </div>
      );
    }
  }