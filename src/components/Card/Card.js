import React,{useState} from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const CardBuy = (props) =>{

    const classes = useStyles();
   
    

    return(
        <div id={props.id}>
            

    <Card  className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            style={{height:'335px'}}
            image={props.src}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button onClick={props.onClick} size="small" color="primary">
            Add to cart
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
    </Card>
        </div>
    )
}

export default CardBuy;