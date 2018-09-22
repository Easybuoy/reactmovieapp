import React, { Component } from 'react';
import  { Container } from 'mdbreact';
import TMDB from '../../../config/keys';
import { Triple } from 'react-preloading-component';
import Card from '../../card/Card';
import Error from '../../error/Error';
// import { Link } from 'react-router-dom';

class TrendingMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
        trending: 0,
        error: 0
    };
    
}

componentDidMount(){
  fetch(`${TMDB.TMDB_PATH}trending/movie/day?api_key=${TMDB.TMDB_API_KEY}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }, 
        }).then(res => res.json()
        .then(data => {
          this.setState({trending: data});
          console.log(this.state);
        })  
      ).catch(err =>{
        this.setState({error: err});
      })
}


    trimText = (text) => {
       return text.substring(0, 100) + '...';
    }

  render(){

    if(this.state.trending !== 0){
      let url =  this.state.trending.results;
      
      if(url){

        return(

          <Container>
              <h1>TRENDING MOVIES</h1>
              <hr></hr>
            <div className="row">   
                
                {
                    
                    url.map((movie, i) => {
                    if(movie.overview.length > 100){
                      movie.overview = this.trimText(movie.overview);
                    }
           return (
            <div className="col-lg-4 col-md-4 col-sm-4">
                <Card imageURL={`${TMDB.IMG_PATH + 'w500/' + movie.backdrop_path}`} cardTitle={movie.original_title}
                cardText = {movie.overview} 
                buttonURL={`/movies/${movie.id}`} buttonText="View Movie"
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
                <Error />
            </div>
            );

    }else{
        return (
            <div>
             <Triple />

            </div>
            );
    }
    // console.log(this.state)    
    // return {render};
    return(
      //preloader
      <Triple />
    );
  }
}

export default TrendingMovies;