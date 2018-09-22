import React, { Component } from 'react';
import TMDB from '../../../config/keys';
import { Triple } from 'react-preloading-component';


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

    }


    return (
      <div>
          <Triple />
      </div>
    );
  }
}

export default Movie;
