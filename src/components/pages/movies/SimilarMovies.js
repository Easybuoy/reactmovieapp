import React, { Component } from 'react';
import { Triple } from 'react-preloading-component';
import TMDB from '../../../config/keys';
import Error from '../../error/Error';
import Card from '../../card/Card';
import { trimText } from '../../../utils';


class SimilarMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            similarmovies: 0,
            movie_id: this.props.movie_id,
            error: 0
        };
    }


    componentDidMount(){ 
        fetch(`${TMDB.TMDB_PATH}movie/${this.state.movie_id}/similar?api_key=${TMDB.TMDB_API_KEY}`, {
                  method: 'get',
                  headers: {    
                      'Content-Type': 'application/json'
                  }, 
              }).then(res => res.json()
              .then(data => {
                this.setState({similarmovies: data});
              })  
            ).catch(err =>{
              this.setState({error: err});
            })
      }

  render() {
    if(this.state.similarmovies !== 0){
        const similarmovies =  this.state.similarmovies.results;
        // let casts = credits.cast;
        if(similarmovies){

            return(
              <div className="container">    

                <h1 className="text-center">SIMILAR MOVIES</h1>
                <hr />
            
                <div className="row">                
                  {
               
                    similarmovies.slice(0, 8).map((similarmovie, i) => {
                     return (
                       <div className="col-lg-3 col-md-3 col-sm-3">
                         <Card
                           imageURL={`${`${TMDB.IMG_PATH  }w500/${  similarmovie.backdrop_path}`}`}
                           cardTitle={similarmovie.original_title}
                           cardText={trimText(similarmovie.overview)} 
                           buttonURL={`/movies/${similarmovie.id}`}
                           buttonText="View More"
                           ReloadLink="true"
                         />
                         <br /> 
                       </div>

                     ); 

                    })

            }   


                </div>
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

export default SimilarMovies;
