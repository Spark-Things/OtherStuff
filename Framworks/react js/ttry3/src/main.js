import React, { Component } from 'react'
import guest from './guest'
import user from './user'

export default class main extends Component {
  render() {
    const register = this.props.cons;
    if(register){
      return <user />
    }
    return <guest />
  }
}

