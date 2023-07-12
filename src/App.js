import './App.css';
import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import News from './components/News';
import LiveTV from './components/LiveTV';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';

export default class App extends Component {

  render() {
    document.body.style.backgroundColor = '#2C3333';
    document.body.style.color = 'white';
    return (
      <BrowserRouter>
          <Navbar />
          <Routes>
            
            <Route path="/topics/general" element={<News key="general" pageSize="4" category='general'/>} />
            <Route path="/topics/business" element={<News key="business" pageSize="4" category='business'/>} />
            <Route path="/topics/technology" element={<News key="technology" pageSize="4" category='technology'/>} />
            <Route path="/topics/sports" element= {<News key="sports" pageSize="4" category='sports' />}/>
            <Route path="/topics/politics" element={<News key="politics" pageSize="4" category='politics'/>} />
            <Route path="/topics/health" element={<News key="health" pageSize="4" category='health'/>} />
            <Route path='/LIVE' element={<LiveTV/>}/>
            
          </Routes>
       
      </BrowserRouter>
    )
  }
}