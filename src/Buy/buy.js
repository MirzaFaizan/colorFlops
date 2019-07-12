import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {' © '}
      <Link color="inherit" href="/">
        ColorFlops
      </Link>
      {' Team.'}
    </Typography>
  );
}

function sendEmail(arr, cust){
  const data = {
      "to": "usman13091996@gmail.com",
      "from": "usman13091996@gmail.com",
      "subject": "Confirm Order",
      "text": "COLORFLOP Custom Build Request",
      "data":arr,
      "customerInfo": cust,
  }
  // Make a request for a user with a given ID
axios.post('https://colorflops-api.herokuapp.com/',data,
 {"Content-Type": "application/json"})
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();


  const [values, setValues] = React.useState({
    firstname:'',
    lastname:'',
    email:'',
    contact: '',
  });


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const temp = props.match.params.id

  console.log(props.location)

  const path =  props.location.pathname;
  const pathtwo = props.location.hash;
  
  const url = path.split('/').filter(Boolean);
  const urltwo = pathtwo.split('/').filter(Boolean);


  const urlarray = [...url,...urltwo];

 
  
  return (
    <div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Customer Information
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                value={values.firstname}
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange('firstname')}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                onChange={handleChange('lastname')}
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange('email')}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="contact"
                label="Contact Number"
                name="contact"
                autoComplete="contact"
                onChange={handleChange('contact')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to the terms of service"
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={()=>sendEmail(urlarray, values)}
            className={classes.submit}
          >
            Order
          </Button>



          
        </form>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
    </div>
  );
}