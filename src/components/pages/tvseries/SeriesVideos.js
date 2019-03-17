import React, { Component } from 'react';
import  { Container } from 'mdbreact';
import { Triple } from 'react-preloading-component';
import TMDB from '../../../config/keys';
import Error from '../../error/Error';

class SeriesVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
        seriesvideos: 0,
        serie_id: this.props.serie_id,
        error: 0
    };
    
}

componentDidMount(){
  fetch(`${TMDB.TMDB_PATH}tv/${this.state.serie_id}/videos?api_key=${TMDB.TMDB_API_KEY}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }, 
        }).then(res => res.json()
        .then(data => {
          this.setState({seriesvideos: data});
        })  
      ).catch(err =>{
        this.setState({error: err});
      })
}

  render(){

    if(this.state.seriesvideos !== 0){
      const seriesvideos =  this.state.seriesvideos.results;

      if(seriesvideos){

        return(

          <Container>
            <h1>VIDEOS</h1>
            <hr />
            <div className="row">   
                
              {
                    
                    seriesvideos.map((video, i) => {

           return (
             <div className="col-lg-4 col-md-4 col-sm-4">
               <div className="embed-responsive embed-responsive-16by9">
                 <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.key}`} allowFullScreen title={video.name} />
               </div>
               <br /> 
             </div>
           ) 
        })}
            </div>
       
            <hr />
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

export default SeriesVideos;