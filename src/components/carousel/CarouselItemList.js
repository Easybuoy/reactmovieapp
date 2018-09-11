import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container, Button } from 'mdbreact';

const CarouselItemList = ({  movie, itemId }) => {
    // console.log(itemId);
    // console.log(movie);
        let posterimgurl =  'https://image.tmdb.org/t/p/w500/' + movie.poster_path;

    return (
      <div className='center ma'>
        <CarouselItem itemId={itemId}>
               <View>
                 <img className="d-block w-100" src={posterimgurl} alt={movie.title} />
                <Mask overlay="black-light"></Mask>
               </View>
               <CarouselCaption>
                 <h3 className="h3-responsive">View More</h3>
                 {/* <Link to= "/chei"><Button color="elegant"> Primary</Button></Link> */}


                 <p>{movie.overview}</p>
               </CarouselCaption>
             </CarouselItem>
      </div>
    );
  }

// class CarouselItemList extends Component {
//   render() {
//       console.log('enter')
//     return (
//       <div>
//          <CarouselItem itemId="1">
//               <View>
//                 <img className="d-block w-100" src='' alt="First slide" />
//                 <Mask overlay="black-light"></Mask>
//               </View>
//               <CarouselCaption>
//                 <h3 className="h3-responsive">View More</h3>
//                 {/* <Link to= "/chei"><Button color="elegant"> Primary</Button></Link> */}


//                 <p>First text</p>
//               </CarouselCaption>
//             </CarouselItem>
//       </div>
//     );
//   }
// }

export default CarouselItemList;
