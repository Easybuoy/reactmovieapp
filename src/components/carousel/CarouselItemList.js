import React from 'react';
import  {CarouselCaption,  CarouselItem, View, Mask } from 'mdbreact';
import TMDB from '../../config/keys';
// import { Link } from 'react-router-dom';



const CarouselItemList = ({  movie, itemId }) => {
  const trimText = (text) => {
    return text.substring(0, 100) + '...';
  }

        let posterimgurl =  `${TMDB.IMG_PATH  + 'w780/' + movie.backdrop_path}`;

        

        // console.log(itemId.toString())
    return (
      <div >
        <CarouselItem itemId={itemId}>
               <View>
                 <img className="d-block w-100" src={posterimgurl} alt={movie.title} />
                <Mask overlay="black-light"></Mask>
               </View>
               <CarouselCaption>
                 <h3 className="h3-responsive">{movie.title}</h3>
                 {/* <Link to= "/chei"><Button color="elegant"> Primary</Button></Link> */}


                 <p className="h6-responsive">{trimText(movie.overview)}</p>
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
