import React, { Component } from "react";
import react from "react";
import "./App.css";
import proptypes from "prop-types";
import { render } from "@testing-library/react";

//const Student = (props) =>{

//  return <h1>Hello {props.name}</h1>
//}

 //class Student extends Component{
 //  render(){
 //    return <h1> Fuck you {this.props.name} </h1>
 //  }
// }
//export default Student;

 const Students = (props) =>{
   return(
     <h1 className="bg"> chup {props.name}
      {props.children}
     </h1>
   )
 }

  Students.propTypes = {
    name: proptypes.string.isRequired
  };

  Students.defaultProps = {
    name: "dilu mc"
  };
  export default Students; 

  class spark extends Component{
    constructor(props){
      super(props);
      this.state = {
       username: "Spark0565"
     };
    }
     render() {
       return( <h1> welcome {this.state.username}</h1>);
  }
}
 const Eh = (props) =>{
       function handleclick(){
         console.log("clicked");
       }
    return(
      <>
       <h1> Hello </h1>
       <button onClick={handleclick}>
         click me 
       </button>
      </>
    );
  
 }