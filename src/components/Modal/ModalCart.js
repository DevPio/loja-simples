import React,{useState,useEffect} from 'react';


import 
{
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter


} from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));



const ModalCart = (props) =>{
    const classes = useStyles();
    const {
       
        className,
        modalOpen, 
       
        contex, 
        closeInnerModal
      } = props;

      const [closeModal, setCloseModal] = useState(modalOpen)

     
   
    const changeModal = ()=>{
        setCloseModal(!modalOpen)
        closeInnerModal(closeModal)
    }



  

    return(
        <div>
           
            <Modal isOpen={modalOpen}  className={className}>
                <ModalHeader >Products</ModalHeader>
                <ModalBody className={classes.root}>
                {contex &&
                    contex.items.map((item,index)=> (
                       
                         <div className={classes.root} style={{marginBottom:'10px'}}>
                         <Paper className={classes.paper}>
                           <Grid container spacing={2}>
                             <Grid item>
                               <ButtonBase className={classes.image}>
                                 <img className={classes.img} alt="complex" src={item.src} />
                               </ButtonBase>
                             </Grid>
                             <Grid item xs={12} sm container>
                               <Grid item xs container direction="column" spacing={2}>
                                 <Grid item xs>
                                   <Typography gutterBottom variant="subtitle1">
                                    Name: {item.name}
                                   </Typography>
                                   <Typography variant="body2" gutterBottom>
                                     Quantite {item.quantite}
                                   </Typography>
                                   <Typography variant="body2" color="textSecondary">
                                   
                                   </Typography>
                                 </Grid>
                                 <Grid item>
                                   <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                     Remove
                                   </Typography>
                                 </Grid>
                               </Grid>
                               <Grid item>
                                 <Typography variant="subtitle1">$ {item.priceTotal}</Typography>
                               </Grid>
                             </Grid>
                           </Grid>
                         </Paper>
                       </div>
                    ))
                }
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={changeModal}>Do Something</Button>{' '}
                <Button color="secondary" onClick={changeModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
    </div>
    )
}

export default ModalCart;