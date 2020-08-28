import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Skeleton  from 'react-loading-skeleton';

class App extends  Component{
  constructor(props){
    super(props);
    this.state = {
      title: "", 
      author: ""
    }
  }
  componentDidMount(){
    fetch("/api/server")
    .then(res => res.json())
    .then(data => {
      this.setState({ title: data.text, author: data.author })
    })
    .catch(err => console.log(err) )
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.state.title ? this.state.title : <Skeleton width={100}/>}  From  {this.state.author ?  this.state.author : <Skeleton  width={100}/>}
        </header>
      </div>
    );
  }
}

export default App;
