import React, { Component } from 'react';
import TMDB from '../../../config/keys';
import { Triple } from 'react-preloading-component';
import Error from '../../error/Error';
import Button from '@material-ui/core/Button';


class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credits: 0,
            movie_id: this.props.movie_id,
            error: 0
        };
    }


    componentDidMount(){ 
        fetch(`${TMDB.TMDB_PATH}movie/${this.state.movie_id}/credits?api_key=${TMDB.TMDB_API_KEY}`, {
                  method: 'get',
                  headers: {    
                      'Content-Type': 'application/json'
                  }, 
              }).then(res => res.json()
              .then(data => {
                this.setState({credits: data});
                console.log(this.state);
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
                        // console.log(${TMDB.IMG_PATH + 'w45/' +cast.profile_path});
                     return (
                        <div className="col-lg-4 col-md-4 col-sm-4">

                     <img src={`${TMDB.IMG_PATH + 'w185/' +cast.profile_path}`} alt={cast.original_title} />
                     <h3 className="text-center">{cast.name}</h3>
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

export default Credits;
