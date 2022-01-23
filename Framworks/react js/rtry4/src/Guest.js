import React, { Component } from 'react'


export default class Guest extends Component {
  render() {
    return (
      <div>
        <h1>Welcome as a guest</h1>
        <button onClick={this.props.dataclick}>Sign in</button>
        <button>Create Account</button>
        
      </div>
    )
  }
}
