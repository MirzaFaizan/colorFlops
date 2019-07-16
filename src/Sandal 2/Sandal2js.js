import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import SvgComponents from './sandal2'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: 'center',
    
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
    color:'white',
  },
  input: {
    display: 'none',
  },
  imgg: {
    textAlign: 'center',
    backgroundcolor: 'black',
    width: '100%' ,
    height: '90%',
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));
 


export default function FullWidthGrid(props) {
  const classes = useStyles();

  const [colorSole,setColorSole] = React.useState('yellow');
  const [colorStrap,setColorStrap] = React.useState('pink');

  const [quant,setQuantity] = React.useState('2');
  const [size,setSize] = React.useState('M');
  const [price,setPrice] = React.useState('12');


 
  function quantity(value){
    setQuantity(value)
  }
  function Size(value){
    setSize(value)
  }

function soleColor(value){
  setColorSole(value)
}

function ColorStrap(value){
  setColorStrap(value)
}

  return (

<div className={classes.root}>
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      
        <Grid container spacing={4}>

{/*

 STRAP SECTION 

 */}
        <Grid item xs={12} sm={7} >
         <br/> 
         <Typography component="div" style={{ fontSize:'35px'}} > 
        Straps</Typography>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#FFFF00')} style={{ color:'black',backgroundColor: '#FFFF00'}}  >
        Yellow 	 
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#008000')} style={{ backgroundColor: '#008000'}}>
        Green
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#A52A2A')} style={{ backgroundColor: '#A52A2A'}}>
        Brown
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#000000')} style={{ backgroundColor: '#000000'}}>
        Black
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#FFFFFF')} style={{ color:'black',backgroundColor: '#FFFFFF'}}>
        White
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#FFB6C1')} style={{ backgroundColor: '#FFB6C1'}}>
        Light Pink   
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#FF69B4')} style={{ backgroundColor: '#FF69B4'}}>
        Hot Pink 
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#EE82EE')} style={{ backgroundColor: '#EE82EE'}}>
        Violet   
        </Button>
        
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#E6E6FA')} style={{ backgroundColor: '#E6E6FA'}}>
        Lavender   
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#808080')} style={{ backgroundColor: '#808080'}}>
        Grey 
        </Button>
        
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#87ceeb')} style={{ backgroundColor: '#87ceeb'}}>
        Blue Sky   
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#0077be')} style={{ backgroundColor: '#0077be'}}>
        Ocean    
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#85461e')} style={{ backgroundColor: '#85461e'}}>
        Caramel   
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#90ee90')} style={{ backgroundColor: '#90ee90'}}>
        LightGreen   
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>ColorStrap('#FF0000')} style={{ backgroundColor: '#FF0000'}} >
        Red
        </Button>
        </Grid>
        <Grid item xs={12} sm={6} style={{ }}>
         <br/>  <br/>
         <Container style={{backgroundColor:'#f0f0f0'}} fixed>
         {/* SVG */}
         <SvgComponents sole={colorSole} strap={colorStrap}> </SvgComponents>
        </Container>
        </Grid>



{/* 
SOLE SECTION  
*/}

        <Grid item xs={12} sm={6} >
         <br/>  <br/>
         <Typography component="div" style={{ fontSize:'35px'}} > 
         Sole </Typography>
        
        <Button variant="contained" onClick={()=>soleColor('0000FF')} className={classes.button}style={{ backgroundColor: '#0000FF'}}>
        Blue
        </Button>
        <Button variant="contained" className={classes.button} onClick={()=>soleColor('008000')}style={{ backgroundColor: '#008000'}}>
        Green
        </Button>
        <Button variant="contained" className={classes.button}onClick={()=>soleColor('A52A2A')}style={{ backgroundColor: '#A52A2A'}}>
        Brown
        </Button>
        <Button variant="contained" className={classes.button}onClick={()=>soleColor('000000')}style={{ backgroundColor: '#000000'}}>
        Black
        </Button>
        <Button variant="contained" className={classes.button}onClick={()=>soleColor('FF69B4')}style={{ backgroundColor: '#FF69B4'}}>
        Hot Pink 
        </Button>
        <Button variant="contained" className={classes.button}onClick={()=>soleColor('FF0000')}style={{ backgroundColor: '#FF0000'}} >
        Red
        </Button>
        <Button variant="contained" className={classes.button}onClick={()=>soleColor('808080')}style={{ backgroundColor: '#808080'}}>
        Grey 
        </Button>
        <Button variant="contained" className={classes.button}onClick={()=>soleColor('FFFF00')}style={{ color:'black',backgroundColor: '#FFFF00'}}>
        Yellow 	 
        </Button>
        
        <Button variant="contained" className={classes.button}onClick={()=>soleColor('FFA500')}style={{ backgroundColor: '#FFA500'}}>
        Orange  
        </Button>
        <Button variant="contained" className={classes.button}onClick={()=>soleColor('FFFFFF')}style={{ color:'black',backgroundColor: '#FFFFFF'}}>
        White
        </Button>
        <br/><br/>
          <Grid container style={{ textAlign:'center', paddingTop:'5%'}}>
            <Grid item xs={12} sm={4}>
              <Typography component="div"  style={{ fontSize:'20px'}} > 
              Quantity :</Typography>
              <TextField
              id="outlined-search"
              label="Quantity"
              type="search"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={(e)=>setQuantity(e.target.value)}
            /> 
          </Grid>
          <Grid item xs={12} sm={4}>
              <Typography component="div"  style={{ fontSize:'20px'}} > 
              Size :</Typography>
              <TextField
              id="outlined-search"
              label="Size"
              type="search"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={(e)=>setSize(e.target.value)}
            /> 
          </Grid>
          <Grid item xs={12} sm={4}>
          <Typography component="div"  style={{ fontSize:'20px'}} > 
              Sandal - 02 </Typography>
               <Typography component="div"  style={{ fontSize:'20px'}} > 
              Price :</Typography>
           <Typography  component="div"  style={{ fontSize:'20px', paddingTop:'20px'}} > 
              12 د.ك</Typography>
              
          </Grid>
          <Grid style={{ textAlign:'center'}} item xs={12} sm={6}>
          <br/>
          <Button variant="contained" color="primary"  style={{ textAlign:'center', fontSize:'15px', width:'45%',height:'70%'}} className={classes.button}
           onClick={()=>{window.location=`/buy/${colorSole}/${colorStrap}/${quant}/${size}/${price}/${'Sandal-02'}`}}>
        Buy
      </Button>
      
          </Grid>
          <Grid style={{ textAlign:'center'}} item xs={12} sm={6}>
          <br/>  <hr />

          <Button variant="contained" color ="" style={{ textAlign:'center', color :"black" , fontSize:'15px', width:'55%',height:'60%'}} className={classes.button}
          onClick={()=>{window.location='http://colorflops.com/'}}>
        Back to Home
      </Button>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>



    </div>
  );
}