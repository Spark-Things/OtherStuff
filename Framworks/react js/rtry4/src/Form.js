import React, { Component } from 'react'

export default class Form extends Component {
   state = {
     name: "geekyshows",
     password: "geek@1234",
     value:""
   }
  handlechnage = (e) =>{
   // this.setState({[e.target.name]: e.target.value});
    const value = 
    e.target.name === "password" ? e.target.value.toUpperCase().substr(0,8) : e.target.value;
    this.setState({[e.target.name]: value});
  }; 
  handlesubmit = e =>{
    console.log(e.target[1].value)
    e.preventDefault();
    this.setState({ value: this.textinput.current.value});
  }

  constructor(props){
    super(props);
    this.textinput = React.createRef();
  }
  componentDidMount = () =>{

    this.textinput.current.focus();
  }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <h2>Controlled by React</h2>
          <label>
            <b>Name:</b>
          </label>
          <input type="text"
          value={this.state.name}
          name="name"
          onChange={this.handlechnage}
          ref={this.textinput}/>
          <br/><br/>
          <label> 
            <b>password :</b></label>
          <input type="text" 
          value={this.state.password} 
          name="password"
          onChange={this.handlechnage} />
          <br/><br/>
          <input type="submit" value="submit"/><br/><br/>
          <label>
            Type here:
          </label>
          <input type="text" ref={this.textinput}/>
          <h2>You have Typed:{this.state.value}</h2>
        </form>
      </div>
    )
  }
}
