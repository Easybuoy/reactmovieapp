import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Fa } from 'mdbreact';
import facedetectionimg from '../../../assets/images/facedetection.PNG';
import currencyconverterimg from '../../../assets/images/currencyconverter.PNG';
import headlinebimg from '../../../assets/images/headline.PNG';
import productlandingimg from '../../../assets/images/product_landing.PNG';
import technicaldocumentationimg from '../../../assets/images/technical_documentation.PNG';
import tributepageimg from '../../../assets/images/tribute_page.PNG';
import aboutbimg from '../../../assets/images/aboutimg.JPG';
import movielistings from '../../../assets/images/movielistings.PNG';
import storemanager from '../../../assets/images/storemanager.png';
import movieinfo from '../../../assets/images/movieinfo.PNG';
import schoolinformationsystem from '../../../assets/images/school_information_system.PNG';
// import NavigationIcon from '@material-ui/icons/Navigation';
// import Icon from '@material-ui/core/Icon';
import Card from '../../card/Card';


import './About.css';



class About extends Component {
  render() {
    
    return (
      <div>
        <img src={aboutbimg} alt="aboutimg" className="img-thumbnail" style={{width:'150px', height: '150px', borderRadius: '50%'}} />
        <h1> About</h1>
        <div className="container">
          
          <p className="text-justify">
Experienced Web Developer with a demonstrated history of working in the information technology and services industry. 
            Skilled in NODE, REACT, MONGODB, PHP, JAVASCRIPT, HTML, Search Engine Optimization (SEO), and Computer Hardware. 
            Strong engineering professional graduated from Aptech Computer Education.

          </p>

          <div className="container">
            <h1 className="text-center"> SKILLS</h1>
            <Button variant="contained" className="skillbutton success-color wh-color">
            NODEJS
            </Button>

            <Button variant="contained" className="skillbutton primary-color wh-color">
            REACTJS
            </Button>

            <Button variant="contained" className="skillbutton success-color wh-color">
            MONGODB
            </Button>

            <Button variant="contained" className="skillbutton primary-color wh-color">
            PHP
            </Button>

            <Button variant="contained" className="skillbutton danger-color wh-color">
            LARAVEL
            </Button>

            <Button variant="contained" className="skillbutton primary-color wh-color">
            YII
            </Button>

            <Button variant="contained" className="skillbutton danger-color wh-color">
            CODEIGNITER
            </Button>

            <Button variant="contained" className="skillbutton danger-color wh-color">
            HTML
            </Button>

            <Button variant="contained" className="skillbutton primary-color wh-color">
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

            <Button variant="contained" className="skillbutton light-blue wh-color">
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


            <Button variant="contained" className="skillbutton light-blue wh-color">
              <Fa icon="wordpress" className="fav" />
            WORDPRESS
            </Button>

            <Button variant="contained" className="skillbutton primary-color wh-color">
              <Fa icon="joomla" className="fav" />
            JOOMLA
            </Button>

            <Button variant="contained" className="skillbutton danger-color wh-color">
              <Fa icon="amazon" className="fav" />
            AWS
            </Button>
          </div>
          <br />

          <div className="container">
            <h1 className="text-center"> PROJECTS</h1>

            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card
                  imageURL={storemanager}
                  cardTitle="Store Manager App"
                  cardText="A web application that helps store owners manage sales and product inventory records."
                  buttonURL="https://storemanagerreact.herokuapp.com/"
                  buttonText="View App"
                  isExternalLink="true"
                />
                <br />
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card
                  imageURL={movielistings}
                  cardTitle="Movie Listings App"
                  cardText="Movie Listing App"
                  buttonURL="https://reactmovieapptmdb.herokuapp.com"
                  buttonText="View App"
                  isExternalLink="true"
                />
                <br />
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card
                  imageURL={facedetectionimg}
                  cardTitle="Face Detection App"
                  cardText="This app lets helps detecting celebrities with image provided" 
                  buttonURL="https://facedetectionapp.herokuapp.com/"
                  buttonText="View App"
                  isExternalLink="true"
                />
                <br />
              </div> 

            </div>
            <br />

            {/* Second Card Row */}
            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card
                  imageURL={headlinebimg}
                  cardTitle="Headline News App"
                  cardText="This is a progressive web app that allows you view latest and currrent news accross the world."
                  buttonURL="https://headline-pwa.herokuapp.com"
                  buttonText="View App"
                  isExternalLink="true"
                />
                <br />
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card
                  imageURL={movieinfo}
                  cardTitle="Movie Info App"
                  cardText="This app lets you search movies and gives users details about movies searched."
                  buttonURL="https://movie-info1.herokuapp.com"
                  buttonText="View App"
                  isExternalLink="true"
                />
                <br />
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card
                  imageURL={schoolinformationsystem}
                  cardTitle="School Information System"
                  cardText="This is a simple School Information System that does handles basic Student Information Records. This application has endpoints that handles creating new student, updating existing students, deleting students and reading students from database."
                  buttonURL="https://protected-inlet-20599.herokuapp.com/"
                  buttonText="View App"
                  isExternalLink="true"
                />
                <br />
              </div>
              
            </div>
            {/* <br></br> */}

            {/* Thrid card row */}
            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card
                  imageURL={currencyconverterimg}
                  cardTitle="Currency Converter App"
                  cardText="This is a currency converter app which converts from one currency to another using current and real-time exchange rates"
                  buttonURL="https://easybuoy.github.io/currencyconverter/"
                  buttonText="View App"
                  isExternalLink="true"
                />
                <br />
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card
                  imageURL={productlandingimg}
                  cardTitle="Product Landing Page"
                  cardText="This is a simple Product Landing Page"
                  buttonURL="https://codepen.io/easybuoy-the-flexboxer/full/ejPXoN/"
                  buttonText="View Page"
                  isExternalLink="true"
                />
                <br />
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card
                  imageURL={technicaldocumentationimg}
                  cardTitle="Technical Documentation Page"
                  cardText="This is a basic Technical Documentation Page For Laravel."
                  buttonURL="https://codepen.io/easybuoy-the-flexboxer/full/vavzrd/"
                  buttonText="View Page"
                  isExternalLink="true"
                />
                <br />
              </div>

                
            </div>

            {/* Fourth card row */}
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card
                  imageURL={tributepageimg}
                  cardTitle="Tribute Page"
                  cardText="This is a Tribute Page made for Mark Zuckerberg"
                  buttonURL="https://codepen.io/easybuoy-the-flexboxer/full/BPObxq/"
                  buttonText="View Page"
                  isExternalLink="true"
                />
                <br />
              </div>
            </div>
          </div>

          <hr />
          <h1 className="text-center">CONTACT ME</h1>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12" />
                
            <div className="col-lg-4 col-md-4 col-sm-12">                            
                            
              <form method="POST" action="https://formspree.io/ekunolaeasybuoy@gmail.com">
                <label htmlFor="email" className="blue-text">From</label>
                <input type="email" id="email" name="_replyto" className="form-control" placeholder="Your Email" required />
                <br />
                <label htmlFor="to" className="blue-text">To</label>
                <input type="text" id="to" name="to" className="form-control" value="Ezekiel Ekunola" readOnly />
                <br />
                <label htmlFor="message" className="blue-text">Message</label>
                {/* minLength="50" maxLength="500" */}
                <textarea type="text" id="message" name="message" className="form-control" rows="3" required />
                <input type="hidden" name="_next" value={`${window.location.host  }/thanks`} />
                <input type="text" name="_gotcha" style={{display:'none'}} />
                <div className="text-center mt-4">
                            
                  <button className="btn btn-outline-blue  hoverable z-depth-5" style={{borderRadius: '50px'}} type="submit">
Send
                    <i className="fa fa-paper-plane-o ml-2" />
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" />

          </div>

        </div>
      </div>
    );
  }
}

export default About;
