import React, { Component } from 'react';
import facedetectionimg from './facedetection.PNG';
import currencyconverterimg from './currencyconverter.PNG';
import headlinebimg from './headline.PNG';
import productlandingimg from './product_landing.PNG';
import technicaldocumentationimg from './technical_documentation.PNG';
import tributepageimg from './tribute_page.PNG';
import aboutbimg from './aboutimg.JPG';



import Card from '../../card/Card';
class About extends Component {
  render() {
      console.log('enter')
    return (
      <div>
        <img src={aboutbimg} alt="aboutimg" className="img-thumbnail" style={{width:'150px', height: '150px', borderRadius: '50%'}}></img>
          <h1> About</h1>
          <div className="container">
          
            <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>

            <div className="row">

                <div className="col">
                <Card imageURL={facedetectionimg} />
                </div>

                <div className="col">
                <Card imageURL={headlinebimg}/>
                </div>

                <div className="col">
                <Card imageURL={currencyconverterimg}/>
                </div>

                </div>
                <br></br>

                <div className="row">

                <div className="col">
                <Card imageURL={facedetectionimg} />
                </div>

                <div className="col">
                <Card imageURL={headlinebimg}/>
                </div>

                <div className="col">
                <Card imageURL={currencyconverterimg}/>
                </div>

                </div>


          </div>
      </div>
    );
  }
}

export default About;
