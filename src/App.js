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
import Accessory from './Components/Accessories/Accessory';
import Mlenses from './Components/Mlenses/Mlenses';
import Bifocal from './Components/ReadingGlasses/Bifocal';
import Single from './Components/ReadingGlasses/Single';
import Male from './Components/Gender/Male';
import Female from './Components/Gender/Female';
import Kids from './Components/Gender/Kids'
import Sunshades from './Components/Sunshades/Sunshades';
import Trending from './Components/Trending/Trending';
import Cart from './Components/Cart/Cart';
import Product from './Components/Product/Product';
import EyewearProduct from './Components/Eyewear/EyewearProduct';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path="/eyewear" component={Eyewear}/>
        <Route path="/accessories" component={Accessory}/>
        <Route path="/magic-lenses" component={Mlenses}/>
        <Route path="/bifocal" component={Bifocal}/>
        <Route path="/single-vision" component={Single}/>
        <Route path="/male" component={Male}/>
        <Route path="/female" component={Female}/>
        <Route path="/kids" component={Kids}/>
        <Route path="/sun-shades" component={Sunshades}/>
        <Route path="/trending" component={Trending}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/product" component={Product}/>
        <Route path="/product/eyewear" component={EyewearProduct}/>
      </Switch>
      <Footer/>
      <Copyright/>
    </Router>
  );
}

export default App;
