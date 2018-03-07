import React, { Component } from 'react';

class Square extends Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}

class Board extends Component {
  render() {
    return (
      <div>
        <div className="board-row">
          <Square value={1}></Square>
          <Square value={2}></Square>
          <Square value={3}></Square>
        </div>
        <div className="board-row">
          <Square value={4}></Square>
          <Square value={5}></Square>
          <Square value={6}></Square>
        </div>
        <div className="board-row">
          <Square value={7}></Square>
          <Square value={8}></Square>
          <Square value={9}></Square>
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
