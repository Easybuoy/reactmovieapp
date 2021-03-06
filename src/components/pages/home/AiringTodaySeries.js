import React, { Component } from 'react';
import  { Container } from 'mdbreact';
import TMDB from '../../../config/keys';
import { Triple } from 'react-preloading-component';
import Card from '../../card/Card';
// import Error from '../../error/Error';

class AiringTodaySeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
        series: 0,
        error: 0
    };
}

componentDidMount(){
  fetch(`${TMDB.TMDB_PATH}tv/airing_today?api_key=${TMDB.TMDB_API_KEY}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }, 
        }).then(res => res.json()
        .then(data => {
          this.setState({series: data});
        })  
      ).catch(err =>{
        this.setState({error: err});
      })
}


    trimText = (text) => {
       return text.substring(0, 100) + '...';
    }

  render(){

    if(this.state.series !== 0){
      let url =  this.state.series.results;
      
      if(url){

        return(

          <Container>
              <h1>AIRING TODAY</h1>
              <hr></hr>
            <div className="row">   
                
                {
                    
                    url.map((movie, i) => {
                    if(movie.overview.length > 100){
                      movie.overview = this.trimText(movie.overview);
                    }
           return (
            <div className="col-lg-4 col-md-4 col-sm-4">
                <Card imageURL={`${TMDB.IMG_PATH+ 'w500/' + movie.backdrop_path}`} cardTitle={movie.original_name}
                cardText = {movie.overview}
                buttonURL={`/series/${movie.id}`} buttonText="View More"
                />
                <br></br> 
            </div>
           ) 
        })}
        </div>
       
            <hr></hr>
          </Container>
        );


      }

    }else if(this.state.error !== 0){
     
            return (
            <div>
                {/* <Error /> */}
            </div>
            );

    }else{
        return (
            <div>
              <Triple />
            </div>
            );
    }
    return(
      //preloader
      <Triple />
    );
  }
}

export default AiringTodaySeries;