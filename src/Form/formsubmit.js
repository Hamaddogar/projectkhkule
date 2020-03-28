import React, { Component } from 'react';
import { Button, InputAdornment, withStyles } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import NameIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from './styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

class RegisterForm extends Component {
    state = {
        email: '',
        uname:'',
        lname:'',
       gender: null,
    hasError: false
     
    }
    handleChangename=(event)=>{
        const uname = event.target.value;
        this.setState({ uname });
    }
    handleChangelastname=(event)=>{
        const lname = event.target.value;
        this.setState({ lname });
    }
    handleChangee = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }
    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }
    handleChangeselect(value) {
      this.setState({ gender: value });

   
    }
  
    handleClick() {
      this.setState({ hasError: false });
      if (!this.state.gender) {
        this.setState({ hasError: true });
      }
    }
  
    registerSubmit = (e) => {
        e.preventDefault();

        
        let uname = this.uname.value;
        let lname = this.lname.value;
        
        let email = this.email.value;
        let gender = this.state.gender;
       
          
        

     
  let  form_data = {uname:uname,lname:lname,email:email,gender:gender}

      
        var option = {
            method: "POST",
            body: JSON.stringify(form_data ),
            headers: {
                "Content-Type": "application/json",
            }

        }
        fetch("http://localhost:5000/api/registeruser/addform", option)
        .then((res) => { return res.json() })
        .then((res) => {
          if (res.success === true) {
              console.log(res)
            this.setState({
              messagedisplay: " Success! Successfully you have  Sign Up ",
              uname:'',
              email:'',
              
            })
            {
              Alert.success(`${this.state.messagedisplay}`, {
                position: 'top',
              })
            }
          }
          else {
            this.setState({
                messagedisplay:" Sorry! Your Email already Exit please use another Email"
               })
            {
              Alert.error(`${this.state.messagedisplay}`, { 
                  position: 'top',
                })
              }
          }
        //   this.props.dispatch(signupAction(res))
        })
        .catch((error) => console.log(error))
    }
    render() {
        const { classes } = this.props;
        const { email } = this.state;
        const { user } = this.state;
        const { uname } = this.state;
        const { lname } = this.state;
        const { gender, hasError } = this.state;
       
        return (


          <div>
            <center>

          
            <div className="w-full flex flex-row justify-center">
            <h1>Submit Form</h1>
             
                <ValidatorForm
                    ref="form"
                    onSubmit={this.registerSubmit}
                    onError={errors => console.log(errors)}
                    className="bg-white shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
                >
                    <Alert stack={{ limit: 1 }} />
                    <TextValidator
                        inputRef={(uname) => this.uname = uname}
                        onChange={this.handleChangename}

                        className="w-full mb-4"
                        type="text"
                        name="name"
                        label=" First Name"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><NameIcon className="text-20" color="action" /></InputAdornment>
                        }}
                        value={uname}
                        variant="outlined"
                        helperText=''
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <br/>   <br/> 
                    <TextValidator
                    inputRef={(lname) => this.lname = lname}
                    onChange={this.handleChangelastname}

                    className="w-full mb-4"
                    type="text"
                    name="name"
                    label=" Last Name"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><NameIcon className="text-20" color="action" /></InputAdornment>
                    }}
                    value={lname}
                    variant="outlined"
                    helperText=''
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br/>
                    <TextValidator
                        inputRef={(email) => this.email = email}
                        className="w-full mb-4"
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><EmailIcon className="text-20" color="action" /></InputAdornment>
                        }}
                        onChange={this.handleChangee}
                        name="email"
                        value={email}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                  <br/>
                  <FormControl className={classes.formControl} error={hasError}>
          <InputLabel htmlFor="name">Select Gender</InputLabel>
          <Select
            name="name"
            value={gender}
            onChange={event => this.handleChangeselect(event.target.value)}
            input={<Input id="name" />}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="other">other</MenuItem>
          </Select>
          {hasError && <FormHelperText>This is required!</FormHelperText>}
        </FormControl>
 <br/>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="w-full mx-auto normal-case"
                        aria-label="LOG IN"
                        value="legacy"
                        id="btnFormRegister"
                    >
                    Form Submit
                    </Button>
  <Link  to="/showdata">Show data</Link>
                </ValidatorForm>
               
            </div>
            </center>
          </div>
        );
    }
}


export default withStyles(styles)(RegisterForm);