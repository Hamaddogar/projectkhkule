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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


import styles from './styles';

class RegisterForm extends Component {
    state = {
        email: '',
        uname:'',
        lname:'',
        selected: null,
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
        this.setState({ selected: value });
      }
    
      handleClick() {
        this.setState({ hasError: false });
        if (!this.state.selected) {
          this.setState({ hasError: true });
        }
      }
    registerSubmit = (e) => {
        e.preventDefault();
        let uname = this.uname.value;
        let lname = this.lname.value;
        
        let email = this.email.value;

     
  let signup_data = {uname:uname,lname:lname,email:email}
      
        var option = {
            method: "POST",
            body: JSON.stringify(signup_data),
            headers: {
                "Content-Type": "application/json",
            }

        }
        fetch("http://localhost:5000/api/registeruser/signup", option)
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
                position: 'top-right',
              })
            }
          }
          else {
            this.setState({
                messagedisplay:" Sorry! Your Data Has Been not save"
               })
            {
              Alert.error(`${this.state.messagedisplay}`, { 
                  position: 'top-right',
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
        const { selected, hasError } = this.state;
        
        return (
       
             
         
                
                <div className="w-full flex flex-row justify-center">
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
                    <br/> <TextValidator
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
                  
                    <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={this.handleChangeselect}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
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

                </ValidatorForm>
               
            </div>
        
               
        );
    }
}


export default withStyles(styles)(RegisterForm);