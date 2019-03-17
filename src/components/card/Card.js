import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    
    let button =  (
      <Button className="primary-color">
        <Link to={`${this.props.buttonURL}`} style={{'color': 'white'}}> 
          {' '}
          {this.props.buttonText}
        </Link>

      </Button>
);
    if(this.props.isExternalLink === 'true'){ 
      button = (
        <Button className="primary-color">
          <a target="_blank" style={{'color': 'white'}} href={this.props.buttonURL}> 
            {' '}
            {this.props.buttonText}
          </a>

        </Button>
);
    }else if(this.props.ReloadLink){
      button = (
        <Button className="primary-color">
          <a style={{'color': 'white'}} href={this.props.buttonURL}> 
            {' '}
            {this.props.buttonText}
          </a>

        </Button>
);
    }



    return (
      <Card className={classes.card}>
        <CardHeader
          // avatar={
          //   <Avatar aria-label="Recipe" className={classes.avatar}>
          //     R
          //   </Avatar>
          // }
          // action={
          //   <IconButton>
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={this.props.cardTitle}
          // subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={this.props.imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            {this.props.cardText}
            {/* {
              {this.props.buttonURL{

              }
            } */}
            <br />
            <br />
            {button}
            {/* <Button className="primary-color"><a target="_blank" style={{'color': 'white'}} href= {this.props.buttonURL}> {this.props.buttonText}</a></Button> */}

          </Typography>
        </CardContent>
        
      </Card>
      
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
