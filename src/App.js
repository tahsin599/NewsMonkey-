import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        
        
        <Routes>   
  
   
    
          <Route  exact path="/sports" element={<News key="sports" pageSize={5} country='in' category='sports'/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country='in' category='entertainment'/>}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={6} country='in' category='technology'/>}/>
          <Route exact path="/health" element={<News key="health" pageSize={6} country='in' category='health'/>}/>
          <Route exact path="/business" element={<News key="business" pageSize={6} country='in' category='business'/>}/>
          <Route exact path="/science" element={<News key="science" pageSize={6} country='in' category='science'/>}/>
          
          
          <Route exact path="/" element={<News key="Home" pageSize={5} country='in' category='general'/>}/>
          
          
       </Routes>

        
      </div>
      </Router>
    )
  }
}
