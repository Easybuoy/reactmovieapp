import React, { Component } from 'react';
import  {Carousel, CarouselInner, Container } from 'mdbreact';
import { Triple } from 'react-preloading-component';
import TMDB from '../../config/keys';
import CarouselItemList from './CarouselItemList';
import Error from '../error/Error';
// import { Link } from 'react-router-dom';

export class CarouselPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        now_playing: 0,
        error: 0
    };
    // this.onClick = this.onClick.bind(this);
}

componentDidMount(){
  fetch(`${TMDB.TMDB_PATH}movie/now_playing?api_key=${TMDB.TMDB_API_KEY}&language=en-US&page=1`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
          
        }).then(res => res.json()
        .then(data => {
          this.setState({now_playing: data});
          console.log(this.state);
        })  
      ).catch(err =>{
        this.setState({error: err});
        console.log(err)
      })
}


  render(){

    if(this.state.now_playing !== 0){
      const url =  this.state.now_playing.results;
      // let itemId = 0;
      // let render = '';
      if(url){
        // url.forEach(function(element) {
          

        // let posterimgurl =  'https://image.tmdb.org/t/p/w500/' + element.poster_path;
        // let movietitle = element.title;
        // let overview = element.overview;
        // let releasedate = overview.release_date;

        // itemId++; 
        // console.log(itemId)
        // console.log(posterimgurl);

        // });

        return(
          <Container fluid>
            <Carousel
              activeItem={1}
              length={20}
              showControls
              showIndicators={false}
              className="z-depth-1"
            >
              <CarouselInner>

                {url.map((movie, i) => { 
                    
               const itemId = i + 1;
                // itemId = itemId + 1;
                                  // console.log(movie);
                                  // console.log(i); 
           // Return the element. Also pass key     
           return (<CarouselItemList movie={movie} itemId={itemId} />) 
        })}

                {/* { url.forEach(function(element) {
          

          let posterimgurl =  'https://image.tmdb.org/t/p/w500/' + element.poster_path;
          let movietitle = element.title;
          let overview = element.overview;
          let releasedate = overview.release_date;
  
          itemId++; 
          console.log(itemId)
          console.log(posterimgurl);
          return (<CarouselItemList movie={element} itemId={itemId} />) 

          }) } */}
          
              </CarouselInner>
            </Carousel>
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
    
    return(
      // preloader
      <Triple />
    );
  }
}

export default CarouselPage;