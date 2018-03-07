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
  renderSquare(position) {
    return (
      <Square
        position={position}
        value={this.props.squares[position]}
        onClick={() => this.props.onSquareClick(position)}
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
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isXNext: true,
    };
  }

  handleSquareClick(position) {
    const { squares, isXNext } = this.state;
    const nextSquares = [...squares];
    nextSquares[position] = isXNext ? "X" : "O";
    this.setState({
      squares: nextSquares,
      isXNext: !isXNext,
    });
  }

  renderStatusText() {
    if (this.state.isXNext) {
      return "Next Player: X";
    } else {
      return "Next Player: O";
    }
  }

  render() {
    return (
      <div>
        <div>
          <Board
            squares={this.state.squares}
            onSquareClick={position => this.handleSquareClick(position)}
          />
        </div>
        <div>{this.renderStatusText()}</div>
      </div>
    );
  }
}

export default TicTacToe;
