import React, { Component } from 'react';
import TMDB from '../../../config/keys';
import { Triple } from 'react-preloading-component';
import Error from '../../error/Error';
import Button from '@material-ui/core/Button';
import TvseriesCredits from './TvSeriesCredits';
import SimilarTvSeries from './SimilarTvSeries';
import SeriesVideos from './SeriesVideos';

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

      convertArrayToCommaSeperated(array){
        let response = '';
        array.map((singleitem, i) => {
            response += singleitem.name + ',' + ' ';
        });
        
        return response.slice(0, -2);
      }

       convertTime(time) {
        var minutes = time % 60;
        var hours = (time - minutes) / 60;
        
        return hours + "h" + ' ' + minutes + 'm';
        }

  render() {
    if(this.state.serie !== 0){
        let serie =  this.state.serie;
            console.log(serie)
        if(serie){
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
                  <div className="img-responsive"> 
                    <img src={`${TMDB.IMG_PATH + 'w342/' +serie.poster_path}`} alt={serie.original_title} />
                     </div>
                  <br></br> 
              </div> 

                <div className="col-lg-8 col-md-8 col-sm-12">
                {/* <img src={`${TMDB.IMG_PATH + 'w780/' +movie.backdrop_path}`} alt={movie.original_title} /> */}
                  
                <h1 className="text-center"> {serie.original_name}</h1>
                  
                <ul className="list-group">
                <li className="list-group-item"><strong>Overview:</strong> {serie.overview}</li>
                    {/* <li className="list-group-item"><strong>Tag Line:</strong> {serie.tagline}</li> */}
                    <li className="list-group-item"><strong>Production Companies:</strong> {this.convertArrayToCommaSeperated(serie.production_companies)}</li>
                    <li className="list-group-item"><strong>Number Of Seasons:</strong> {serie.number_of_seasons}</li>
                    <li className="list-group-item"><strong>Number Of Episodes:</strong> {serie.number_of_episodes}</li>

                    {/* <li className="list-group-item"><strong>Production Countries:</strong> {this.convertArrayToCommaSeperated(serie.production_countries)}</li> */}
                    {/* <li className="list-group-item"><strong>Genre:</strong> {this.convertArrayToCommaSeperated(serie.genres)}</li> */}
                    {/* <li className="list-group-item"><strong>Language(s):</strong> {this.convertArrayToCommaSeperated(serie.spoken_languages)}</li> */}
                    <li className="list-group-item"><strong>Runtime:</strong> {this.convertTime(serie.episode_run_time[0])}</li>
                <li className="list-group-item"><strong>Status:</strong> {serie.status}</li>
                <li className="list-group-item"><strong>Popularity:</strong> {serie.popularity}</li>

                </ul>
                
                <div>
                <Button variant="outlined" color="primary" style={{marginRight: '20px', marginTop: '20px'}} className="text-center"><a target="_blank"  href= {serie.homepage}> View Series Homepage</a></Button>
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
         
              <hr></hr>

                
              <TvseriesCredits serie_id = {serie.id}/>              
              <SimilarTvSeries serie_id = {serie.id}/>
              <SeriesVideos serie_id = {serie.id}/>
              
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

export default TvSerie;
