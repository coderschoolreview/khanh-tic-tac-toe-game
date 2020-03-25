import React, { Component } from 'react'
import Board from './Board'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      history: [],
    }
  }
  setParentsState = (obj) => {
    this.setState(obj)
  }
  render() {
    console.log('state',this.state)
    return (
      <div className="game">
        <div className="game-board">
          <ul>
            {
              this.state.history.map((item, idx) => {
                return (
                  <li key={idx}>
                    <button>
                      Go to move {idx + 1}
                    </button>
                  </li>
                )
              })
            }
          </ul>
          <Board 
          squares = {this.state.squares} 
          xIsNext={this.state.xIsNext} 
          history={this.state.history}
          setParentsState={this.setParentsState}
          />
        </div>
        <div className="game-info">
        </div>
      </div>
    );
  }
}
