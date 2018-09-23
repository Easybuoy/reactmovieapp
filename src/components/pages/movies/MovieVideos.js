// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';

// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// });

// class SimpleTabs extends React.Component {
//   state = {
//     value: 0,
//   };

//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   render() {
//     const { classes } = this.props;
//     const { value } = this.state;

//     return (
//       <div className={classes.root}>
//         <AppBar position="static">
//           <Tabs value={value} onChange={this.handleChange}>
//             <Tab label="Item One" />
//             <Tab label="Item Two" />
//             <Tab label="Item Three" href="#basic-tabs" />
//           </Tabs>
//         </AppBar>
//         {value === 0 && <TabContainer>Item One</TabContainer>}
//         {value === 1 && <TabContainer>Item Two</TabContainer>}
//         {value === 2 && <TabContainer>Item Three</TabContainer>}
//       </div>
//     );
//   }
// }

// SimpleTabs.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SimpleTabs);



import React, { Component } from 'react';
import  { Container } from 'mdbreact';
import TMDB from '../../../config/keys';
import { Triple } from 'react-preloading-component';
import Card from '../../card/Card';
import Error from '../../error/Error';
// import { Link } from 'react-router-dom';

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
          console.log(this.state);
        })  
      ).catch(err =>{
        this.setState({error: err});
      })
}


    trimText = (text) => {
       return text.substring(0, 100) + '...';
    }

  render(){

    if(this.state.movievideos !== 0){
      let movievideos =  this.state.movievideos.results;
      console.log(movievideos)
      if(movievideos){
        // https://www.youtube.com/watch?v=UL29y0ah92w      
        return(

          <Container>
              <h1>MOVIE VIDEOS</h1>
              <hr></hr>
            <div className="row">   
                
                {/* {
                    
                    url.map((movie, i) => {
                    if(movie.overview.length > 100){
                      movie.overview = this.trimText(movie.overview);
                    }
           return (
            <div className="col-lg-4 col-md-4 col-sm-4">
                <Card imageURL={`${TMDB.IMG_PATH + 'w500/' + movie.backdrop_path}`} cardTitle={movie.original_title}
                cardText = {movie.overview} 
                buttonURL={`/movies/${movie.id}`} buttonText="View More"
                />
                <br></br> 
            </div>
           ) 
        })} */}
        </div>
       
            <hr></hr>
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
    // console.log(this.state)    
    // return {render};
    return(
      //preloader
      <Triple />
    );
  }
}

export default MovieVideos;