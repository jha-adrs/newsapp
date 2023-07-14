import './App.css';
import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import News   from './components/News';
import LiveTV from './components/LiveTV';
import Premium from './components/Premium';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  
  state = {
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress: progress});
  }
  render() {
    document.body.style.backgroundColor = '#1e1f1f';
    document.body.style.color = 'white';
    const pageSize = 12;
    const toploaderheight=4;
    const apiKey=process.env.REACT_APP_NEWS_API_KEY_2;
    
    return (
      <BrowserRouter>
          <Navbar />
          {/*Adding the top loader bar */ }
          <LoadingBar color='#B71375' progress={this.state.progress}
          height={toploaderheight}
          onLoaderFinished={()=> this.setProgress(0)}
          />
          <Routes>
            
            <Route path="/" element={<News apiKey={apiKey} setProgress={this.setProgress} key="general" pageSize={pageSize} category='general'/>} />
            <Route path="/topics/business" element={<News apiKey={apiKey} setProgress={this.setProgress} key="business" pageSize={pageSize} category='business'/>} />
            <Route path="/topics/technology" element={<News apiKey={apiKey} setProgress={this.setProgress} key="technology" pageSize={pageSize} category='technology'/>} />
            <Route path="/topics/sports" element= {<News apiKey={apiKey} setProgress={this.setProgress} key="sports" pageSize={pageSize} category='sports' />}/>
            <Route path="/topics/politics" element={<News apiKey={apiKey} setProgress={this.setProgress} key="politics" pageSize={pageSize} category='politics'/>} />
            <Route path="/topics/health" element={<News apiKey={apiKey} setProgress={this.setProgress} key="health" pageSize={pageSize} category='health'/>} />
            <Route path='/LIVE' element={<LiveTV key="LIVE" />}/>
            <Route path="/premium" element={<Premium key="premium" pageSize={pageSize} category='premium'/>} />

          </Routes>
      </BrowserRouter>
    )
  }
}