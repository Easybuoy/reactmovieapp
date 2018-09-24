import React, { Component } from 'react';
import  { Container } from 'mdbreact';
import TMDB from '../../../config/keys';
import { Triple } from 'react-preloading-component';
import Error from '../../error/Error';
// import { Link } from 'react-router-dom';

class MovieVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movievideos: 0,
        movie_id: this.props.movie_id,
        error: 0
    };
    
}

componentDidMount(){
  fetch(`${TMDB.TMDB_PATH}movie/${this.state.movie_id}/videos?api_key=${TMDB.TMDB_API_KEY}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }, 
        }).then(res => res.json()
        .then(data => {
          this.setState({movievideos: data});
        })  
      ).catch(err =>{
        this.setState({error: err});
      })
}


    trimText = (text) => {
       return text.substring(0, 100) + '...';
    }

  render(){

    if(this.state.movievideos !== 0){
      let movievideos =  this.state.movievideos.results;

      if(movievideos){

        return(

          <Container>
              <h1>MOVIE VIDEOS</h1>
              <hr></hr>
            <div className="row">   
                
                {
                    
                    movievideos.map((movie, i) => {

           return (
            <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${movie.key}`} allowFullScreen title={movie.name} ></iframe>
                </div>
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

export default MovieVideos;