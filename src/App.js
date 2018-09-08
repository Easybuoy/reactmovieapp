import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import About from './components/about/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
        <Navigation/>
        {/* <Switch>
      <Route exact path="/about" component={About} />
      </Switch> */}
        <Carousel />
        <Footer />
        
      </div>
      </Router>
    );
  }
}

export default App;
