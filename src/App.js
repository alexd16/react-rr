import React, { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends Component {
  render() {
    return (
      <div>
        <div className="board-row">
          <Square position={1} />
          <Square position={2} />
          <Square position={3} />
        </div>
        <div className="board-row">
          <Square position={4} />
          <Square position={5} />
          <Square position={6} />
        </div>
        <div className="board-row">
          <Square position={7} />
          <Square position={8} />
          <Square position={9} />
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
