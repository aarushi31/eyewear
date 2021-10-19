import React from 'react';
import './App.css';
import Copyright from './Components/Footer/Copyright';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Eyewear from './Components/Eyewear/Eyewear';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path="/eyewear" component={Eyewear}/>
      </Switch>
      <Footer/>
      <Copyright/>
    </Router>
  );
}

export default App;
