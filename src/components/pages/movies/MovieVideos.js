import React, { Component } from 'react';
import  { Container } from 'mdbreact';
import { Triple } from 'react-preloading-component';
import TMDB from '../../../config/keys';
import Error from '../../error/Error';

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
       return `${text.substring(0, 100)  }...`;
    }

  render(){

    if(this.state.movievideos !== 0){
      const movievideos =  this.state.movievideos.results;

      if(movievideos){

        return(

          <Container>
            <h1>MOVIE VIDEOS</h1>
            <hr />
            <div className="row">   
                
              {
                    
                    movievideos.map((movie, i) => {

           return (
             <div className="col-lg-4 col-md-4 col-sm-4">
               <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${movie.key}`} allowFullScreen title={movie.name} />
              </div>
               <br /> 
             </div>
           ) 
        })}
            </div>
       
            <hr />
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
    
    return(
      <Triple />
    );
  }
}

export default MovieVideos;