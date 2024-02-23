import React, { Component } from 'react'

export default class Component_Mount extends Component {
    componentWillUnmount() {
        alert("componentWillUnmount called");      
    }
    
    render() {
        return (

            <div>
                <h1>we use ComponentDidMount ...</h1>
                <p>ComponentDidMount is mainly used to  load API and to display pop-up messages on web pages.
                    where ComponentDidMount was load when all html Dom is loaded then ComponentDidMount is load .
                </p>
            </div>
        )
    }
}
