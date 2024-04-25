import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={
    progress:0
  }
  apiKey=process.env.REACT_APP_NEWS_API
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
       // onLoaderFinished={() => setProgress(0)}
      />
        
        
        <Routes>   
  
   
    
          <Route  exact path="/sports" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}    key="sports" pageSize={5} country='in' category='sports'/>}/>
          <Route exact path="/entertainment" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}    key="entertainment" pageSize={6} country='in' category='entertainment'/>}/>
          <Route exact path="/technology" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}    key="technology" pageSize={6} country='in' category='technology'/>}/>
          <Route exact path="/health" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}    key="health" pageSize={6} country='in' category='health'/>}/>
          <Route exact path="/business" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}    key="business" pageSize={6} country='in' category='business'/>}/>
          <Route exact path="/science" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}    key="science" pageSize={6} country='in' category='science'/>}/>
          
          
          <Route exact path="/" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}    key="Home" pageSize={5} country='in' category='general'/>}/>
          
          
       </Routes>

        
      </div>
      </Router>
    )
  }
}
