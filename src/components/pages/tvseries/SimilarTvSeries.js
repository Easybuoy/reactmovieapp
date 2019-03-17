import React, { Component } from 'react';
import { Triple } from 'react-preloading-component';
import TMDB from '../../../config/keys';
import Error from '../../error/Error';
import Card from '../../card/Card';
import { trimText } from '../../../utils';



class SimilarTvSeries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            similartvseries: 0,
            serie_id: this.props.serie_id,
            error: 0
        };
    }


    componentDidMount(){ 
        fetch(`${TMDB.TMDB_PATH}tv/${this.state.serie_id}/similar?api_key=${TMDB.TMDB_API_KEY}`, {
                  method: 'get',
                  headers: {    
                      'Content-Type': 'application/json'
                  }, 
              }).then(res => res.json()
              .then(data => {
                this.setState({similartvseries: data});
              })  
            ).catch(err =>{
              this.setState({error: err});
            })
      }

  render() {
    if(this.state.similartvseries !== 0){
        const similartvseries =  this.state.similartvseries.results;
        // let casts = credits.cast;
        if(similartvseries){

            return(
              <div className="container">    

                <h1 className="text-center">SIMILAR SERIES</h1>
                <hr />
            
                <div className="row">                
                  {
               
                    similartvseries.slice(0, 8).map((similartvserie, i) => {
                     return (
                       <div className="col-lg-3 col-md-3 col-sm-3">
                         <Card
                           imageURL={`${`${TMDB.IMG_PATH  }w500/${  similartvserie.backdrop_path}`}`}
                           cardTitle={similartvserie.original_name}
                           cardText={trimText(similartvserie.overview)} 
                           buttonURL={`/series/${similartvserie.id}`}
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
          return (
            <div>
              <Triple />
            </div>
              )
    }


    return (
      <div>
        <Triple />
      </div>
    );
  }
}

export default SimilarTvSeries;
