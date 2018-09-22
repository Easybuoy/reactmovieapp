import React, { Component } from 'react';
import TMDB from '../../../config/keys';
import { Triple } from 'react-preloading-component';
import Error from '../../error/Error';
import ImageCard from '../../card/ImageCard';


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
        let movie =  this.state.movie;
        
        if(movie){
  
          return(
  
            <div className="container">
              <div className="row">   
              <div className="col-lg-4 col-md-4 col-sm-12">
                  {/* <ImageCard imageURL={`${TMDB.IMG_PATH+movie.backdrop_path}`} cardTitle={movie.original_name}
                  cardText = {movie.overview}
                  buttonURL={movie.id} buttonText="View Series"
                  /> */}
                  {/* <div className="img-responsive"> */}
                    <img src={`${TMDB.IMG_PATH + 'w342/' +movie.poster_path}`}  />
                    {/* </div> */}
                  <br></br> 
              </div> 

                <div className="col-lg-8 col-md-8 col-sm-12"> 
                <h1> {movie.overview}</h1>
                {/* <img src={`${TMDB.IMG_PATH+movie.backdrop_path}`} /> */}
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
         
              <hr></hr>
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
