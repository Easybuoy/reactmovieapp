import React, { Component } from 'react';
import { Triple } from 'react-preloading-component';
import Button from '@material-ui/core/Button';

import TMDB from '../../../config/keys';
import Error from '../../error/Error';
import Credits from './Credits';
import SimilarMovies from './SimilarMovies';
import MovieVideos from './MovieVideos';
import { convertTime, convertArrayToCommaSeperated } from '../../../utils';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: 0,
            movie_id: this.props.match.params.movie_id,
            error: 0
        };
    }


    componentDidMount(){ 
        fetch(`${TMDB.TMDB_PATH}movie/${this.state.movie_id}?api_key=${TMDB.TMDB_API_KEY}`, {
                  method: 'get',
                  headers: {
                      'Content-Type': 'application/json'
                  }, 
              }).then(res => res.json()
              .then(data => {
                this.setState({movie: data});
                console.log(this.state);
              })  
            ).catch(err =>{
              this.setState({error: err});
            })
      }


  render() {
    if(this.state.movie !== 0){
        const {movie} = this.state;
        
        if(movie){
            // let prod_companies = movie.production_companies;
            // let production_companies = '';
            // prod_companies.map((company, i) => {
            //     production_companies += company.name + ',' + ' ';
            // });
            // production_companies = production_companies.slice(0, -1);







            return(
  
              <div className="container">
                <div className="row">   
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    {/* <ImageCard imageURL={`${TMDB.IMG_PATH+movie.backdrop_path}`} cardTitle={movie.original_name}
                  cardText = {movie.overview}
                  buttonURL={movie.id} buttonText="View Series"
                  /> */}
                    {/* <div className="img-responsive"> */}
                    <img src={`${`${TMDB.IMG_PATH  }w342/${ movie.poster_path}`}`} alt={movie.original_title} />
                    {/* </div> */}
                    <br /> 
                  </div> 

                  <div className="col-lg-8 col-md-8 col-sm-12">
                    {/* <img src={`${TMDB.IMG_PATH + 'w780/' +movie.backdrop_path}`} alt={movie.original_title} /> */}
                  
                    <h1 className="text-center"> 
                      {' '}
                      {movie.original_title}
                    </h1>
                  
                    <ul className="list-group">
                      <li className="list-group-item">
                        <strong>Overview:</strong> 
                        {' '}
                        {movie.overview}
                      </li>
                      <li className="list-group-item">
                        <strong>Tag Line:</strong> 
                        {' '}
                        {movie.tagline}
                      </li>
                      <li className="list-group-item">
                        <strong>Production Companies:</strong> 
                        {' '}
                        {convertArrayToCommaSeperated(movie.production_companies)}
                      </li>
                      <li className="list-group-item">
                        <strong>Production Countries:</strong> 
                        {' '}
                        {convertArrayToCommaSeperated(movie.production_countries)}
                      </li>
                      <li className="list-group-item">
                        <strong>Genre:</strong> 
                        {' '}
                        {convertArrayToCommaSeperated(movie.genres)}
                      </li>
                      <li className="list-group-item">
                        <strong>Language(s):</strong> 
                        {' '}
                        {convertArrayToCommaSeperated(movie.spoken_languages)}
                      </li>
                      <li className="list-group-item">
                        <strong>Runtime:</strong> 
                        {' '}
                        {convertTime(movie.runtime)}
                      </li>
                      <li className="list-group-item">
                        <strong>Status:</strong> 
                        {' '}
                        {movie.status}
                      </li>
                      <li className="list-group-item">
                        <strong>Release Date:</strong> 
                        {' '}
                        {movie.release_date}
                      </li>

                    </ul>
                
                    <div>
                      <Button variant="outlined" color="primary" style={{marginRight: '20px', marginTop: '20px'}} className="text-center"><a target="_blank" href={movie.homepage}> View Movie Homepage</a></Button>
                      <Button variant="outlined" color="primary" style={{marginRight: '20px', marginTop: '20px'}} className="text-center"><a target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}`}> View IMDB</a></Button>

                    </div>


                  

                  </div>
                  
                  
                  
                  
                  {/* {
                      
                      url.map((movie, i) => {
                      if(movie.overview.length > 100){
                        movie.overview = this.trimText(movie.overview);
                      }
             return (
              <div className="col-lg-4 col-md-4 col-sm-4">
                  <Card imageURL={`${TMDB.IMG_PATH+movie.backdrop_path}`} cardTitle={movie.original_name}
                  cardText = {movie.overview}
                  buttonURL={movie.id} buttonText="View Series"
                  />
                  <br></br> 
              </div>
             ) 
          })
          } */}
                </div>
         
                <hr />

                
                <Credits movie_id={movie.id} />              
                <SimilarMovies movie_id={movie.id} />
                <MovieVideos movie_id={movie.id} />
              
              </div>
          );
  
  
        }
        // else{
        //     return (
        //         <div> 
        //             <h1>Movie Not Found</h1>
        //         </div>
        //     )
        // }
  
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
              )
    }


    return (
      <div>
        <Triple />
      </div>
    );
  }
}

export default Movie;
