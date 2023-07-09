import './App.css';
import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  render() {
    document.body.style.backgroundColor = '#2C3333';
    document.body.style.color = 'white';
    return (
      <div>
        <Navbar />
        <News />
        
      </div>
    )
  }
}