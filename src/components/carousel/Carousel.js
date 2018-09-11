import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container, Button } from 'mdbreact';
import TMDB_API_KEY from '../../config/keys';
// import { Link } from 'react-router-dom';

class CarouselPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        now_playing: {},
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
          this.setState({now_playing: data})
          console.log(this.state);
        })  
      ).catch(err =>console.log(err))
}


// {
//   console.log(res)

//   console.log(res.json())
// }

  render(){
    // let url = '';
    let url = 'https://image.tmdb.org/t/p/w500/' + this.state.now_playing.results; 
    console.log(url)
    return(
      <Container fluid>
        {/* <h4 className="mt-5 mb-2">Basic example</h4> */}
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src={url} alt="First slide" />
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