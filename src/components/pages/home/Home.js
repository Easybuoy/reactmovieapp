import React, { Component } from 'react';
import Carousel from '../../carousel/Carousel';
import TrendingMovies from './TrendingMovies';
import PopularSeries from './PopularSeries';
class Home extends Component {
  render() {
    return (
      <div>
          <Carousel />
          <TrendingMovies />
          <PopularSeries />
      </div>
    );
  }
}

export default Home;
