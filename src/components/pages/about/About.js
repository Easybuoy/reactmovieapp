import React, { Component } from 'react';
import aboutbimg from './aboutimg.JPG';

class About extends Component {
  render() {
      console.log('enter')
    return (
      <div>
        <img src={aboutbimg} alt="aboutimg" className="img-thumbnail" style={{width:'150px', height: '150px', borderRadius: '50%'}}></img>
          <h1> About</h1>
          <div className="container">
          <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
          </div>
      </div>
    );
  }
}

export default About;
