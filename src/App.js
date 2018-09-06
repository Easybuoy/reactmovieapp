import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default App;
