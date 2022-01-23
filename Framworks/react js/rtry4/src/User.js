import React, { Component } from 'react'
import { mycontext } from './App'
export default class User extends Component {
  render() {
    return (
      <div>
        <h1>Welcome Spark</h1>
        <button onClick={this.props.dataclick}> logout </button>
        <mycontext.Consumer>
          {data => <h1>{data}</h1>}
        </mycontext.Consumer>
      </div>
    )
  }
}
