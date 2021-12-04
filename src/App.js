import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Landing from './component/landingComponent/landing';
 
class App extends Component {
  
  render() {
    return (
      <div>
      <Landing/>
       </div>
   );
  }
}
 
export default App;