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
            
          
          
          <Route exact path="/" element={<News key="Home" pageSize={5} country='in' category='general'/>}/>
          
          
       </Routes>

        
      </div>
      </Router>
    )
  }
}
