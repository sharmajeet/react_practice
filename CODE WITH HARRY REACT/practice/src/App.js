import React, { Component, useState } from 'react'
import Validations from './Validations';
import Introduction from './Component/Introduction';
import Member from './Component/Member';
import './App.css' ;
import Component_Mount from './Component/Component_Mount';
import UseingStates from './Component/UseingStates';
import UseEffect from './Component/UseEffect';
import StyleTypes from './Component/StyleTypes';
export default class App extends React.Component {

  constructor(){
    super();
    console.log("constructor load..");
    this.state={
      count :0
    }
  }
  // componentDidUpdate(){
  //   console.log("componentDidUpdate",this.state.count)
  // }
  
  shouldComponentUpdate  (){  //called 2nd after the constructor called..
    console.log("ShouldcomponentUpdate called")
    // console.warn("shouldComponentUpdate",this.state.count);
    return true ;
  }
    // this.state={
    //   visit :0
    // }
  
  // componentDidMount() {
  //   console.log("componentDidMount loaded");
    
  // }
  
    render(){
  return(
    
    <>
    {/* <div className="App">
      {
        this.state.count ? <Component_Mount/>:<h1>removed</h1>
      }
      <h1>Should Component Update :<mark> {this.state.count} </mark></h1>

      <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Count </button>
    </div>
      <button onClick={()=>this.setState({count:!this.state.count})}>removed</button> */}
   {/* <div className="App">
    <h1>Visiting this site count = {this.state.visit}</h1>
    <button onClick={()=>{this.setState({visit:this.state.visit+1})}}>View</button>
   </div> */}
    {/* <Component_Mount/> */}
    {/* <UseingStates/> */}
    {/* <UseEffect/> */}
    <StyleTypes/>
    </>
  )
  }
}

  // states logic
  // const [status, setStatus] = useState(false);
  // return (
  //   <div>
  //     {status ?
  //       <h1>Hello,World!</h1> 
  //       : null
  //     }
  //     <button onClick={()=>(setStatus(false))}>Hide</button>
  //     <button onClick={()=>(setStatus(true))}>Show</button>
      
  //     <button onClick={()=>(setStatus(!status))}>Toggel</button>
  //   </div>  )

  // const[name,setName] =useState ("");
  // const[terms,setTerms] =useState (false);
  // const [singer, setSinger] =useState("");
  // const[age , setAge]= useState("");
  //special function to stop form to submit without entering any information
  // function getFormData(e)
  // {
  //   console.warn(name, age , singer , terms );
  //   e.preventDefault();
  // }
  // states