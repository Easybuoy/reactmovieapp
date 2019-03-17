import React, { Component } from 'react';
import { Triple } from 'react-preloading-component';
import Button from '@material-ui/core/Button';
import TMDB from '../../../config/keys';
import Error from '../../error/Error';
import TvseriesCredits from './TvSeriesCredits';
import SimilarTvSeries from './SimilarTvSeries';
import SeriesVideos from './SeriesVideos';
import { convertTime, convertArrayToCommaSeperated } from '../../../utils';

class TvSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serie: 0,
            serie_id: this.props.match.params.serie_id,
            error: 0
        };
    }


    componentDidMount(){ 
        fetch(`${TMDB.TMDB_PATH}tv/${this.state.serie_id}?api_key=${TMDB.TMDB_API_KEY}`, {
                  method: 'get',
                  headers: {
                      'Content-Type': 'application/json'
                  }, 
              }).then(res => res.json()
              .then(data => {
                this.setState({serie: data});
                console.log(this.state);
              })  
            ).catch(err =>{
              this.setState({error: err});
            })
      }
      
  render() {
    if(this.state.serie !== 0){
        const {serie} = this.state;
        if(serie){
            return(
  
              <div className="container">
                <div className="row">   
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="img-responsive"> 
                      <img src={`${`${TMDB.IMG_PATH  }w342/${ serie.poster_path}`}`} alt={serie.original_title} />
                    </div>
                    <br /> 
                  </div> 

                  <div className="col-lg-8 col-md-8 col-sm-12">
                  
                    <h1 className="text-center"> 
                      {' '}
                      {serie.original_name}
                    </h1>
                  
                    <ul className="list-group">
                      <li className="list-group-item">
                        <strong>Overview:</strong> 
                        {' '}
                        {serie.overview}
                      </li>

                      <li className="list-group-item">
                        <strong>Production Companies:</strong> 
                        {' '}
                        {convertArrayToCommaSeperated(serie.production_companies)}
                      </li>
                      <li className="list-group-item">
                        <strong>Number Of Seasons:</strong> 
                        {' '}
                        {serie.number_of_seasons}
                      </li>
                      <li className="list-group-item">
                        <strong>Number Of Episodes:</strong> 
                        {' '}
                        {serie.number_of_episodes}
                      </li>
                    
                      <li className="list-group-item">
                        <strong>Runtime:</strong> 
                        {' '}
                        {convertTime(serie.episode_run_time[0])}
                      </li>
                      <li className="list-group-item">
                        <strong>Status:</strong> 
                        {' '}
                        {serie.status}
                      </li>
                      <li className="list-group-item">
                        <strong>Popularity:</strong> 
                        {' '}
                        {serie.popularity}
                      </li>

                    </ul>
                
                    <div>
                      <Button variant="outlined" color="primary" style={{marginRight: '20px', marginTop: '20px'}} className="text-center"><a target="_blank" href={serie.homepage}> View Series Homepage</a></Button>
                      {/* <Button variant="outlined" color="primary" style={{marginRight: '20px', marginTop: '20px'}} className="text-center"><a target="_blank"  href= {`https://www.imdb.com/title/${serie.imdb_id}`}> View IMDB</a></Button> */}

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

                
                <TvseriesCredits serie_id={serie.id} />              
                <SimilarTvSeries serie_id={serie.id} />
                <SeriesVideos serie_id={serie.id} />
              
              </div>
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
              )
    }


    return (
      <div>
        <Triple />
      </div>
    );
  }
}

export default TvSerie;
