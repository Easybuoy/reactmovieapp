import React, { Component } from 'react';
import Carousel from '../../carousel/Carousel';
// import Card from '../../card/Card';

class Home extends Component {
  render() {
      console.log('enter')
    return (
      <div>
         <Carousel />
         {/* <Card /> */}
      </div>
    );
  }
}

export default Home;
