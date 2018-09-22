import React, { Component } from 'react';
import Carousel from '../../carousel/Carousel';
import TrendingMovies from './TrendingMovies';
import UpcomingMovies from './UpcomingMovies';
import PopularSeries from './PopularSeries';



class Home extends Component {
  render() {
    return (
      <div>
          <Carousel />
          <TrendingMovies />
          <UpcomingMovies />
          <PopularSeries />
      </div>
    );
  }
}

export default Home;
