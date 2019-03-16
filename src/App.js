import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/pages/home/Home';
import Movies from './components/pages/movies/Movies';
import Movie from './components/pages/movies/Movie';
import Tvseries from './components/pages/tvseries/Tvseries';
import TvSerie from './components/pages/tvseries/TvSerie';
import About from './components/pages/about/About';
import Thanks from './components/thanks/Thanks';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navigation/>
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route  path="/movies/:movie_id" component={Movie} />
      <Route  path="/series/:serie_id" component={TvSerie} />
      <Route exact path="/tvseries" component={Tvseries} />
      <Route exact path="/about" component={About} />
      <Route exact path="/thanks" component={Thanks} />

      <Footer />
        
      </div>
      </Router>
    );
  }
}

export default App;
