import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleSquareClick(position) {
    const { squares } = this.state;
    const nextSquares = [...squares];
    nextSquares[position] = "X";
    this.setState({
      squares: nextSquares,
    });
  }

  renderSquare(position) {
    return (
      <Square
        position={position}
        value={this.state.squares[position]}
        onClick={() => this.handleSquareClick(position)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class TicTacToe extends Component {
  render() {
    return (
      <div>
        <div>
          <Board />
        </div>
        <div>Next Player: X</div>
      </div>
    );
  }
}

export default TicTacToe;
