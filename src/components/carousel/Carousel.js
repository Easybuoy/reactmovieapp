import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container, Button } from 'mdbreact';
import TMDB_API_KEY from '../../config/keys';
import CarouselItemList from './CarouselItemList';
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
          <Container fluid>
            {/* <h4 className="mt-5 mb-2">Basic example</h4> */}
            <Carousel
              activeItem={1}
              length={20}
              showControls={true}
              showIndicators={false}
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
          
{/* <div class="carousel-item"><div class="view"><img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide"><div class="mask rgba-black-slight"></div></div><div class="carousel-caption"><h3 class="h3-responsive">Slight mask</h3><p>Third text</p></div></div> */}
              </CarouselInner>
            </Carousel>
          </Container>
        );


        

      }
      // console.log(url)

    }else if(this.state.error){
      console.log('unable to fetch now!!');
    }else{
      console.log('unable to fetch now');
    }
    
    // return {render};
    return(
      <Container fluid>
        {/* <h4 className="mt-5 mb-2">Basic example</h4> */}
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={true}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src='https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg' alt="First slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">View More</h3>
                {/* <Link to= "/chei"><Button color="elegant"> Primary</Button></Link> */}


                <p>First text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
                <Mask overlay="black-strong"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
                <Mask overlay="black-slight"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselPage;