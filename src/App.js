import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/pages/home/Home';
import Movies from './components/pages/movies/Movies';
import Tvseries from './components/pages/tvseries/Tvseries';
import About from './components/pages/about/About';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navigation/>
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/tvseries" component={Tvseries} />
      <Route exact path="/about" component={About} />
      <Footer />
        
      </div>
      </Router>
    );
  }
}

export default App;
