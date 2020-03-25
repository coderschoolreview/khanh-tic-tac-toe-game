import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {

  handleClick(i) {
    const squares = this.props.squares.slice();
    squares[i] = this.props.xIsNext ? '⭐' : '🌞';
    this.props.setParentsState({
      squares: squares,
      xIsNext: !this.props.xIsNext,
      history: [
        ...this.props.history,
        {
          ...this.props.history,
          squares: squares,
          xIsNext: !this.props.xIsNext
        }]
    })
  }

  calculateWinner = () => {
    const lines = [
      [0, 1, 2, 3, 4],
      [1, 2, 3, 4, 5],
      [2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11],
      [8, 9, 10, 11, 12],
      [9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18],
      [15, 16, 17, 18, 19],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
      [22, 23, 24, 25, 26],
      [23, 24, 25, 26, 27],
      [28, 29, 30, 31, 32],
      [29, 30, 31, 32, 33],
      [30, 31, 32, 33, 34],
      [35, 36, 37, 38, 39],
      [36, 37, 38, 39, 40],
      [37, 38, 39, 40, 41],
      [42, 43, 44, 45, 46],
      [43, 44, 45, 46, 47],
      [44, 45, 46, 47, 48],
      [0, 7, 14, 21, 28],
      [7, 14, 21, 28, 35],
      [14, 21, 28, 35, 42],
      [1, 8, 15, 22, 29],
      [8, 15, 22, 29, 36],
      [15, 22, 29, 36, 43],
      [2, 9, 16, 23, 30],
      [9, 16, 23, 30, 37],
      [16, 23, 30, 37, 44],
      [3, 10, 17, 24, 31],
      [10, 17, 24, 31, 38],
      [17, 24, 31, 38, 45],
      [4, 11, 18, 25, 32],
      [11, 18, 25, 32, 39],
      [18, 25, 32, 39, 46],
      [5, 12, 19, 26, 32],
      [12, 19, 26, 32, 40],
      [19, 26, 32, 40, 47],
      [6, 13, 20, 27, 34],
      [13, 20, 27, 34, 41],
      [20, 27, 34, 41, 48],
      [0, 8, 16, 24, 32],
      [8, 16, 24, 32, 40],
      [16, 24, 32, 40, 48],
      [1, 9, 17, 25, 33],
      [9, 17, 25, 33, 41],
      [2, 10, 18, 26, 34],
      [7, 15, 23, , 31, 39],
      [15, 23, 31, 39, 47],
      [14, 22, 30, 38, 46],

    ];
    

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d, e] = lines[i];
      if (this.props.squares[a]
        && this.props.squares[a] === this.props.squares[b]
        && this.props.squares[a] === this.props.squares[c]
        && this.props.squares[a] === this.props.squares[d]
        && this.props.squares[a] === this.props.squares[e]) { return this.props.squares[a]; }
    }
    return null;
  }

  renderSquare(indexList) {
    return indexList.map((item) => {
      return (
      < Square
        winner={this.calculateWinner()}
        value={this.props.squares[item]}
        onClick={() => this.handleClick(item)}
      />
      )
    })

  }

  render() {
    let status = '';
    const winner = this.calculateWinner();
    console.log('winner', winner)
    if (winner) {
      this.props.postData()
      status = `Winner:  ${winner}`;
    } else {
      status = this.props.xIsNext ? `xIsNext is 🌞` : `xIsNext is ⭐`;
    }

    return (
      <div style={{flex:5}}>
        <div className="status">{status}</div>
        <div>

          <div className="board-row"> {this.renderSquare([0, 1, 2, 3, 4, 5, 6])} </div>
          <div className="board-row"> {this.renderSquare([7, 8, 9, 10, 11, 12, 13])} </div>
          <div className="board-row"> {this.renderSquare([14, 15, 16, 17, 18, 19, 20])} </div>
          <div className="board-row"> {this.renderSquare([21, 22, 23, 24, 25, 26, 27])} </div>
          <div className="board-row"> {this.renderSquare([28, 29, 30, 31, 32, 33, 34])} </div>
          <div className="board-row"> {this.renderSquare([35, 36, 37, 38, 39, 40, 41])} </div>
          <div className="board-row"> {this.renderSquare([42, 43, 44, 45, 46, 47, 48])} </div>
        </div>
      </div>
    )
  }
}

