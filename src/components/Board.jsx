import React, { Component } from 'react';
import Square from "./Square";
//import Button from 'muicss/lib/react/button';

  class Board extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }

    handleClick(i) {
      const squares = this.state.squares.slice(); //create a copy of the squares array to modify instead of modifying the existing array
  //    squares[i] = 'X';
  //    this.setState({squares: squares});
      squares[i] = this.state.xIsNext ? 'X' : 'O';
  //?
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }

    handleReset = ()=>{
      let squares = [...this.state.squares];
      let xIsNext;
      for (let index = 0; index < squares.length; index++) {
          squares[index] = null;
          xIsNext = true;
      }
      this.setState({squares: squares, xIsNext: xIsNext});
  }
  

    renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }
  
    render() {
  //    const status = 'Next player: X';
  //    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <div>
          <div className="status">{status}</div>
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
          <button  variant = "outlined" size = "large" color = "danger"  onClick={this.handleReset}>
            Reset
          </button>
        </div>
      );
    }
  }
//style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  export default Board ;