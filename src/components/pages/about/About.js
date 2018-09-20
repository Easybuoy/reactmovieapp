import React, { Component } from 'react';
import facedetectionimg from './facedetection.PNG';
import currencyconverterimg from './currencyconverter.PNG';
import headlinebimg from './headline.PNG';
import productlandingimg from './product_landing.PNG';
import technicaldocumentationimg from './technical_documentation.PNG';
import tributepageimg from './tribute_page.PNG';
import aboutbimg from './aboutimg.JPG';
import movielistings from './movielistings.PNG';
import movieinfo from './movieinfo.PNG';
import schoolinformationsystem from './school_information_system.PNG';
import Button from '@material-ui/core/Button';
// import NavigationIcon from '@material-ui/icons/Navigation';
// import Icon from '@material-ui/core/Icon';
import { Fa } from 'mdbreact';
import Card from '../../card/Card';


import './About.css';



class About extends Component {
  render() {
    
    return (
      <div>
        <img src={aboutbimg} alt="aboutimg" className="img-thumbnail" style={{width:'150px', height: '150px', borderRadius: '50%'}}></img>
          <h1> About</h1>
          <div className="container">
          
            <p className="text-justify">Experienced Web Developer with a demonstrated history of working in the information technology and services industry. 
            Skilled in NODE, REACT, MONGODB, PHP, JAVASCRIPT, HTML, Search Engine Optimization (SEO), and Computer Hardware. 
            Strong engineering professional graduated from Aptech Computer Education.</p>

            <div className="container">
            <h1 className="text-center"> SKILLS</h1>
            <Button variant="contained"  className="skillbutton success-color wh-color">
            NODEJS
            </Button>

            <Button variant="contained" className="skillbutton primary-color wh-color">
            REACTJS
            </Button>

            <Button variant="contained"  className="skillbutton success-color wh-color">
            MONGODB
            </Button>

            <Button variant="contained"  className="skillbutton primary-color wh-color">
            PHP
            </Button>

            <Button variant="contained"  className="skillbutton danger-color wh-color">
            LARAVEL
            </Button>

            <Button variant="contained"  className="skillbutton primary-color wh-color">
            YII
            </Button>

            <Button variant="contained" className="skillbutton danger-color wh-color">
            CODEIGNITER
            </Button>

            <Button variant="contained" className="skillbutton danger-color wh-color">
            HTML
            </Button>

            <Button variant="contained"  className="skillbutton primary-color wh-color">
            CSS
            </Button>

            <Button variant="contained" className="skillbutton warning-color wh-color">
            JAVASCRIPT
            </Button>

            <Button variant="contained" className="skillbutton purple wh-color">
            REDUX
            </Button>

            <Button variant="contained" className="skillbutton danger-color wh-color">
            ANGULAR
            </Button>

            <Button variant="contained"  className="skillbutton light-blue wh-color">
            JAVA
            </Button>

            <Button variant="contained" color="primary" className="skillbutton wh-color">
            API
            </Button>

            <Button variant="contained" className="skillbutton black wh-color">
            <Fa icon="github" className="fav" />
            GITHUB
            </Button>

            <Button variant="contained" className="skillbutton danger-color wh-color">
            <Fa icon="gitlab" className="fav" />
            GITLAB
            </Button>


            <Button variant="contained"  className="skillbutton light-blue wh-color">
            <Fa icon="wordpress" className="fav" />
            WORDPRESS
            </Button>

            <Button variant="contained"  className="skillbutton primary-color wh-color">
            <Fa icon="joomla" className="fav" />
            JOOMLA
            </Button>

            <Button variant="contained" className="skillbutton danger-color wh-color">
            <Fa icon="amazon" className="fav" />
            AWS
            </Button>
            </div>
            <br></br>

            <div className="container">
            <h1 className="text-center"> PROJECTS</h1>

                <div className="row">

                <div className="col">
                <Card imageURL={movielistings} />
                </div>

                <div className="col">
                <Card imageURL={facedetectionimg}/>
                </div>

                <div className="col">
                <Card imageURL={headlinebimg}/>
                </div>

                </div>
                <br></br>

                {/* Second Card Row */}
                <div className="row">

                <div className="col">
                <Card imageURL={movieinfo} />
                </div>

                <div className="col">
                <Card imageURL={productlandingimg}/>
                </div>

                <div className="col">
                <Card imageURL={currencyconverterimg}/>
                </div>
                </div>
                <br></br>

                {/* Thrid card row */}
                <div className="row">
                <div className="col">
                <Card imageURL={schoolinformationsystem} />
                </div>

                <div className="col">
                <Card imageURL={technicaldocumentationimg}/>
                </div>

                <div className="col">
                <Card imageURL={tributepageimg}/>
                </div>
                </div>

            </div>

           

          </div>
      </div>
    );
  }
}

export default About;
