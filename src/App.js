import './App.css';
import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import News from './components/News';
import LiveTV from './components/LiveTV';
import Premium from './components/Premium';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import image from './assets/background.jpg';

export default class App extends Component {

  render() {
    document.body.style.backgroundColor = '#2C3333';
    document.body.style.color = 'white';
    const pageSize = 12;
    return (
      <BrowserRouter>
          <Navbar />
      
    
          <Routes>
            
            <Route path="/" element={<News key="general" pageSize={pageSize} category='general'/>} />
            <Route path="/topics/business" element={<News key="business" pageSize={pageSize} category='business'/>} />
            <Route path="/topics/technology" element={<News key="technology" pageSize={pageSize} category='technology'/>} />
            <Route path="/topics/sports" element= {<News key="sports" pageSize={pageSize} category='sports' />}/>
            <Route path="/topics/politics" element={<News key="politics" pageSize={pageSize} category='politics'/>} />
            <Route path="/topics/health" element={<News key="health" pageSize={pageSize} category='health'/>} />
            <Route path='/LIVE' element={<LiveTV key="LIVE" />}/>
            <Route path="/premium" element={<Premium key="premium" pageSize={pageSize} category='premium'/>} />

          </Routes>
      </BrowserRouter>
    )
  }
}