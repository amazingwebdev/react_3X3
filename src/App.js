import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends Component {
  render() {
    return(
      <button className="square" onClick={() => this.props.handleClick()}>
        { this.props.value }
      </button>
    );
  }
}

class Board extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xturn: Boolean(true)
    }
  }

  handleClick(i) {
    const temp = this.state.squares.slice();

    if(temp[i] != null) {
      alert("Can not mark in this position.");
    }
    else {
      if(this.state.xturn) {
        this.setState({xturn: false});
        temp[i] = 'X';
      }
      else {
        this.setState({xturn: true});
        temp[i] = 'O';
      }
    }
    this.setState({squares: temp});
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} handleClick={()=>this.handleClick(i)} />
  }

  render() {
    const status = "Next Player: X";

    return (
      <div>
        <div className="status">{ status }</div>
        <div className="border-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="border-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="border-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Board />
      </div>
    );
  }
}



export default App;
