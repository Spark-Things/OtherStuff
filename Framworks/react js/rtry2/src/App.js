import react, { Component } from "react";
import Students from "./Student";
import React from "react";

//class App extends Component{
//    render(){
//      return (
//        <>
 //         <h1>Hello spark</h1>
  //        <a> I am here </a>
 //       </>
 //     ); 
//    }

//}
  
   const app =() =>{
     return (
      <> 
       <Students name="btc"/>
       <Students name="bc"/>
       <Students> fuck dilu </Students>
    </>
   )
  } 
   class App extends Component{
      constructor(props){
         super(props);
          this.state = {
             name: "Rahul",
          }
         }
      handleclick =(name, e) =>{
         this.setState({name: "Dilu"});
         console.log(e);
      };
      handleclickarg = (e) =>{
         this.handleclick(this.state.name, e);
      }
      render(){
         return(
            <>
            <h1>hello {this.state.name}</h1>
            <button onClick={this.handleclickarg}>click here</button>
            </>
         )
      }

   }
   export default App; 
  