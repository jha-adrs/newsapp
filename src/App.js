import './App.css';
import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LiveTV from './components/LiveTV';
import Premium from './components/Premium';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


export default function App() {
  const [progress, setProgress] = useState(0);
  document.body.style.backgroundColor = '#1e1f1f';
  document.body.style.color = 'white';
  const pageSize = 12;
  const toploaderheight = 4;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY_2;

  return (
    <BrowserRouter>
      <Navbar />
      {/*Adding the top loader bar */}
      <LoadingBar color='#B71375' progress={progress}
        height={toploaderheight}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>

        <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category='general' />} />
        <Route path="/topics/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category='business' />} />
        <Route path="/topics/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category='technology' />} />
        <Route path="/topics/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category='sports' />} />
        <Route path="/topics/politics" element={<News apiKey={apiKey} setProgress={setProgress} key="politics" pageSize={pageSize} country="in" category='politics' />} />
        <Route path="/topics/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category='health' />} />
        <Route path='/LIVE' element={<LiveTV key="LIVE" />} />
        <Route path="/premium" element={<Premium key="premium" pageSize={pageSize} country="in" category='premium' />} />

      </Routes>
    </BrowserRouter>
  )
}
