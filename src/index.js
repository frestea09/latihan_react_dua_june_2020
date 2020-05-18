import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hello, Reacts</h1>
        <p>ilman</p>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))