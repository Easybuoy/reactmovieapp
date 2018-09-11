import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container, Button } from 'mdbreact';
import TMDB_API_KEY from '../../config/keys';
import CarouselItemList from './CarouselItemList';
import { Triple } from 'react-preloading-component';
// import { Link } from 'react-router-dom';

class CarouselPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        now_playing: {},
        error: {}
    };
    // this.onClick = this.onClick.bind(this);
}

componentDidMount(){
  // console.log(TMDB_API_KEY);
  fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=8820a34ead565c3598da6ffc356064fc&language=en-US&page=1', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }) 
          
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


// {
//   console.log(res)

//   console.log(res.json())
// }

  render(){
    // let url = '';
    // 'https://image.tmdb.org/t/p/w500/' +
    

    if(this.state.now_playing){
      let url =  this.state.now_playing.results;
      let itemId = 0;
      let render = '';
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
          <Container >
            <Carousel
              activeItem={1}
              length={20}
              showControls={true}
              showIndicators={true}
              className="z-depth-1">
              <CarouselInner>

                {url.map((movie, i) => { 
                    
               let itemId = i + 1;
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

    }else if(this.state.error){
      console.log('unable to fetch now!!');
    }else{
      console.log('unable to fetch now');
    }
    
    // return {render};
    return(
      <Triple />
    );
  }
}

export default CarouselPage;