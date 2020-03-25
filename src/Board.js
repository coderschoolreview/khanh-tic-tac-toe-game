import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {
  
  handleClick(i) {
    const squares = this.props.squares.slice ();
    // if (calculateWinner (squares) || squares[i]) {
    //   return;
    // }
    squares[i] = this.props.xIsNext ? 'X': 'O';
    this.props.setParentsState ({
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

   calculateWinner = ()=> {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for (let i=0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      if (this.props.squares[a]&& this.props.squares[a]===this.props.squares[b] && this.props.squares[a]=== this.props.squares[c]) {
        return this.props.squares[a];
      }
    }
    return null;
  }
  
  
    renderSquare(i) {
        return (
        < Square 
        winner = {this.calculateWinner()}
        value={this.props.squares[i]}
        onClick={()=>this.handleClick(i)}
        />
        );
      }
    
      render() {
        let status='';
        const winner = this.calculateWinner();
        console.log('winner',winner)
        if (winner) {
          status = `Winner:  ${winner}`;
        } else {
          status = this.props.xIsNext? `xIsNext is O`:`xIsNext is X`;
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
          </div>
        )
      }
}
