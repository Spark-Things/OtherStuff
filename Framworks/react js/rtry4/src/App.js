import React, { Component } from 'react'
import User from './User'
import Guest from './Guest'
import './App.css'
import or from './or.jpg'
export const mycontext = React.createContext();

export default class App extends Component {
  state = {
    users: [
      { id: 101, name: "rahul",password:"554dgdhgv"},
      { id: 102, name: "sonam",password:"664dgdhgv"},
      { id: 103, name: "sumit",password:"774dgdhgv"},
    ],
    islogin: false,
    chnage: false,
    login: "spark"
  }
  clicklogin = () =>{
    this.setState({islogin: true});
  }
  clicklogout = ()=>{
    this.setState({islogin: false})
  }
  clickhandle = () =>{
    this.setState({chnage:true})
  }
  render() {
   // const islogin = this.state.islogin;
   // const primemember = this.props.primmember;
     // if(islogin){
      //  return <User dataclick={this.clicklogout}/>
      //} else {
      //  return <Guest dataclick={this.clicklogin}/>
     // }
    const newUsers = this.state.users.map(user => {console.log(user);
      const btnStyle ={
        color: "white",
        backgroundColor: "red"
      };
      const outerstyle ={
        padding:'15px',
        fontSize: '12px'
      }
      if(this.state.chnage){
        btnStyle.backgroundColor = "green";
      }

    return(
      <>
      <h1 key={user.id} >
      ID: {user.id} name: {user.name} password:{user.password}
      </h1>
      <button onClick={this.clickhandle} style={{...btnStyle,...outerstyle}}>Button</button>
      </>
    );
  });
  return(<>
     <div>{newUsers}</div>
     <button className="btn btn-info">Normal Button</button>
     <img src={or} width="300px"/>
     <img src={process.env.PUBLIC_URL + "/R&D.jpg"} width="200px"/>
     <mycontext.Provider value={this.state.login}>
       <React.StrictMode>
       <User />
       </React.StrictMode>
     </mycontext.Provider>
    </> ) 
}
}