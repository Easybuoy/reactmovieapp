import React, { Component } from 'react';
import SearchBox from './SearchBox';
import TMDB from '../../../config/keys';
import Error from '../../error/Error';
import Card from '../../card/Card';
import TrendingMovies from '../home/TrendingMovies';
import UpcomingMovies from '../home/UpcomingMovies';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchField: '',
        searchResults: 0,
        error: 0
    };
}

  onSearchChange = (event) =>{
    this.setState({searchField: event.target.value});
    fetch(`${TMDB.TMDB_PATH}search/movie?api_key=${TMDB.TMDB_API_KEY}&query=${event.target.value}&include_adult=true`, {
      method: 'get',
      headers: {    
          'Content-Type': 'application/json'
      }, 
  }).then(res => res.json()
  .then(data => {
    this.setState({searchResults: data});
  })  
).catch(err =>{
  this.setState({error: err});
})
}

trimText = (text) => {
  return `${text.substring(0, 50)  }...`;
}

  render() {
    if(this.state.searchResults !== 0){
      const searchresults =  this.state.searchResults.results;
      // let casts = credits.cast;
      if(searchresults){

          return(
            <div className="container">    
              <SearchBox searchChange={this.onSearchChange} />

              <h1 className="text-center">RESULTS</h1>
              <hr />
          
              <div className="row">                
                {
             
                  searchresults.map((searchresult, i) => {
                   return (
                     <div className="col-lg-4 col-md-4 col-sm-4">
                       <Card
                         imageURL={`${`${TMDB.IMG_PATH  }w500/${  searchresult.backdrop_path}`}`}
                         cardTitle={searchresult.original_title}
                         cardText={this.trimText(searchresult.overview)} 
                         buttonURL={`/movies/${searchresult.id}`}
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
        // return (
        //     <div>
        //       <Triple />
        //     </div>
        //     )
  }


    return (
      <div>
        {/* <h1> Movies</h1> */}
        <div className="container">
          <SearchBox searchChange={this.onSearchChange} />
          <TrendingMovies />
          <UpcomingMovies />
          {/* <Input 
        placeholder="Search Movies...."
        inputProps={{
          'aria-label': 'Description',
        }}
      /> */}
          
        </div>
      </div>
    );
  }
}

export default Movies;
