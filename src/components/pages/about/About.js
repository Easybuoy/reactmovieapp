import React, { Component } from 'react';
import aboutbimg from './aboutimg.JPG';

class About extends Component {
  render() {
      console.log('enter')
    return (
      <div>
        <img src={aboutbimg} alt="..." className="img-thumbnail" style={{width:'100px', height: '100px', borderRadius: '50%'}}></img>
          <h1> About</h1>
      </div>
    );
  }
}

export default About;
