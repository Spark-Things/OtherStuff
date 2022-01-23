import React, { Component } from 'react';
import marks from './marks';

export default class student1 extends Component {
  constructor(){
    super();
    this.state = {
      roll: 101
    };
  }
   ch = () =>{
     console.log("click");
     this.setState({roll:102});
   }
  render() {
    return (
      <div>
         <marks roll={this.state.roll}/>
         <button onClick={this.ch}>here</button>  
      </div>
    )
  }
}
