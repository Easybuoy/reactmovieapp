import React, { Component } from 'react';
import Input from '@material-ui/core/Input';


class Movies extends Component {
  render() {

    return (
      <div>
          <h1> Movies</h1>
          <div className="container">
          <Input
        placeholder="Search Movies...."
        inputProps={{
          'aria-label': 'Description',
        }}
      />
          
          </div>
      </div>
    );
  }
}

export default Movies;
