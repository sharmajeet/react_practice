import React, { Component } from 'react'

export default class Introduction extends Component {
  constructor(){
    super();
    this.state = {
        email :"Jeet@123.com"
      }
  }
  render() {
    // console.log("Render Method ",this.props)
    console.warn("Render Method",this.state.email);
    return (
      <div>
        <h1>Introduction Component 
        </h1>
        <button onClick={()=>this.setState({email:"Jeetsharma@gmail.com"})}>Change Email</button>
      </div>
    )
  }
}
