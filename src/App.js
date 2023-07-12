import './App.css';
import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import News from './components/News';
import {BrowserRouter} from 'react-router-dom';

export default class App extends Component {

  render() {
    document.body.style.backgroundColor = '#2C3333';
    document.body.style.color = 'white';
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <News pageSize="4" category='general'/>
        
      </div>
      </BrowserRouter>
    )
  }
}