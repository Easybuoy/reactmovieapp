import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Fa } from 'mdbreact';



class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: 0
        };
        // this.onClick = this.onClick.bind(this);
    }

    reload(){

        // this.setState({error: 1})

        if(this.state.error === 1){
         window.location.reload();

        }
    }

    render() {
      
      return (
        <div>
          {/* <h1>{this.props.errorMessage} </h1> */}
          <div className="container">
            
            {/* <Button className="primary-color"> {this.props.buttonText}</a></Button> */}
            <a href='.'>
              <Button style={{'color': 'white'}} variant="contained" className="danger-color">
                <Fa icon="refresh" className="fav" />
              Reload
              
              </Button>
            </a>
          </div>
          <br />
  
        </div>
      );
    }
  }
  
  export default Error;
  