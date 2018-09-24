import React, { Component } from 'react';
import TMDB from '../../../config/keys';
import { Triple } from 'react-preloading-component';
import Error from '../../error/Error';
import './TvSeriesCredits.css' ;


class TvseriesCredits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credits: 0,
            serie_id: this.props.serie_id,
            error: 0
        };
    }


    componentDidMount(){ 
        fetch(`${TMDB.TMDB_PATH}tv/${this.state.serie_id}/credits?api_key=${TMDB.TMDB_API_KEY}`, {
                  method: 'get',
                  headers: {    
                      'Content-Type': 'application/json'
                  }, 
              }).then(res => res.json()
              .then(data => {
                this.setState({credits: data});
              })  
            ).catch(err =>{
              this.setState({error: err});
            })
      }

      convertArrayToCommaSeperated(array){
        let response = '';
        array.map((singleitem, i) => {
            response += singleitem.name + ',' + ' ';
        });
        
        return response.slice(0, -2);
      }

       convertTime(time) {
        var minutes = time % 60;
        var hours = (time - minutes) / 60;
        
        return hours + "h" + ' ' + minutes + 'm';
        }

  render() {
    if(this.state.credits !== 0){
        let credits =  this.state.credits;
        let casts = credits.cast;

        if(credits){

            return(
                <div className="container">    

                <h1 className="text-center">CASTS</h1>
              <hr></hr>
            
            <div className="row">                
           {
              
                    casts.slice(0, 12).map((cast, i) => { 
                     return ( 
                        <div className="col-lg-4 col-md-4 col-sm-4">

                    <div className="box">
                     <img src={`${TMDB.IMG_PATH + 'w185/' +cast.profile_path}`} alt={cast.original_title} />
                     <p className="text-center"><strong>Name: </strong> {cast.name}</p>
                     <p className="text-center red-text"><strong>Character: </strong> {cast.character}</p>
                    </div>
                    <br></br>
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

export default TvseriesCredits;
