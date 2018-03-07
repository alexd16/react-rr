import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }
  render() {
    return (
      <button className="square" onClick={ ()=> this.setState({ value: 'X' }) }>
        {this.state.value}
      </button>
    )
  }
}

class Board extends Component {
  render() {
    return (
      <div>
        <div className="board-row">
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
        <div className="board-row">
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
        <div className="board-row">
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
      </div>
    )
  }
}

class TicTacToe extends Component {
  render() {
    return (
      <div>
        <div>
          <Board/>
        </div>
        <div>
          Next Player: X
        </div>
      </div>
    );
  }
}

export default TicTacToe;
