import React, { Component } from 'react'

export default class Square extends React.Component {
      render() {
        const doesWinnerExist = this.props.winner === 'X'|| this.props.winner === 'O' 
        return (
          <button
         disabled = {doesWinnerExist}
            className="square"
            onClick={() => this.props.onClick()}
          >
            {this.props.value}
          </button>
        );
      }
}
