
import React, { Component } from 'react'
const Army = (Men,Shot,Demage) => {
  class newmen extends Component{
    state={
      gunshots: 0,
      helth: 150  
      };
  handlegunshots = () =>{
     this.setState(
       {
        gunshots: this.state.gunshots+Shot,
        helth: this.state.helth - (Shot*2)})
  };
  render() {
    if(this.state.helth == 0 || this.state.helth < 0){
      this.setState({helth: "Died"})
    }
    return(
      <Men 
        hocgunname="Ak47"
        hocgunshots={this.state.gunshots}
        hochandlegunshots={this.handlegunshots}
        hochelth={this.state.helth}
      />
    );
  }
}
return newmen;
};
export default Army;