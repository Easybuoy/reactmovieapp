import React, { Component } from 'react';
import Carousel from '../../carousel/Carousel';
import Card from '../../card/Card';
import TrendingMovies from './TrendingMovies';
class Home extends Component {
  render() {
      console.log('enter')
    return (
      <div>
         {/* <Carousel /> */}
          <TrendingMovies />


         {/* <div className="container">
      <div className="row">

    <div className="col">
    <Card />
    </div>

    <div className="col">
    <Card />
    </div>

    <div className="col">
    <Card me="hi"/>
    </div>

  </div>
</div> */}
        
      </div>
    );
  }
}

export default Home;
