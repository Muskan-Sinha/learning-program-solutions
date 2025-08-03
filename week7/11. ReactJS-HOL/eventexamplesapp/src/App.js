import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! Hope you're learning React well.");
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSynthetic = (e) => {
    e.preventDefault(); 
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: '30px', fontFamily: 'Arial' }}>
        <h1>Event Examples App</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>

        <hr />

        <button onClick={() => this.sayWelcome("Welcome to React Event Handling!")}>
          Say Welcome
        </button>

        <hr />

        <button onClick={this.handleSynthetic}>Synthetic Event Click</button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
