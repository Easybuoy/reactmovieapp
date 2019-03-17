/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import { Triple } from 'react-preloading-component';
import TMDB from '../../../config/keys';
import Error from '../../error/Error';

import './Credits.css' ;


class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credits: 0,
            movie_id: this.props.movie_id,
            error: 0
        };
    }


    componentDidMount(){ 
        fetch(`${TMDB.TMDB_PATH}movie/${this.state.movie_id}/credits?api_key=${TMDB.TMDB_API_KEY}`, {
                  method: 'get',
                  headers: {    
                      'Content-Type': 'application/json'
                  }, 
              }).then(res => res.json()
              .then(data => {
                this.setState({credits: data});
              })  
            ).catch(err =>{
              this.setState({error: err});
            })
      }

  render() {
    if(this.state.credits !== 0){
        const {credits} = this.state;
        const casts = credits.cast;

        if(credits){

            return(
              <div className="container">    

                  <h1 className="text-center">CASTS</h1>
                  <hr />
            
                  <div className="row">                
              {
              
                    casts.slice(0, 12).map((cast, i) => { 
                     return ( 
                       <div className="col-lg-4 col-md-4 col-sm-4">

                          <div className="box">
                      <img src={`${`${TMDB.IMG_PATH  }w185/${ cast.profile_path}`}`} alt={cast.original_title} />
                      <p className="text-center">
                <strong>Name: </strong> 
                {' '}
                {cast.name}
                      </p>
                      <p className="text-center red-text">
                <strong>Character: </strong> 
                {' '}
                {cast.character}
                      </p>
                          </div>
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

export default Credits;
