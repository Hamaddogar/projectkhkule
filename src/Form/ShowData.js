import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import store   from '../../src/store/configureStore'
import {ADD_FORM} from '../../src/store/actions/actionTypes'
import './style.css'

class   Showdata extends Component {

     state={

        loading:true
     }
    
   componentDidMount()
   {

    
    fetch('http://localhost:5000/showdata')
    .then((response) => {
      return response.json();
    })
    .then((response) => {
        store.store.dispatch({
            type:ADD_FORM,
             payload:response
          })
    });
  

   }
   
  
  render() {
    const { classes } = this.props;
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }

     setTimeout(() => {
       this.setState({
           loading:false
       })

         
     }, 5000);


 

    return (
      <div>
      <TableContainer component={Paper}>
      <Table    aria-label="simple table">
        <TableHead  id="colorChange">
          <TableRow>
            <TableCell  align="right" > First Name</TableCell>
            <TableCell align="right" className="textColor">Last Name</TableCell>
            <TableCell align="right" >Email</TableCell>
            <TableCell align="right" id="textColor">Gender</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        {this.props.formreducer.data.length!=0? this.props.formreducer.data.map((row,index)=>{
             console.log(row.uname)
   
  return <TableRow key={index}>


  <TableCell component="th" scope="row">
    {row.uname}
  </TableCell>
  <TableCell align="right">{row.lname}</TableCell>
  <TableCell align="right">{row.email}</TableCell>
  <TableCell align="right">{row.gender}</TableCell>
  
</TableRow>
}):""}
        
        </TableBody>
      </Table>
    </TableContainer>

  
    </div>
    );
}
  }


const mapStateToProps = state => ({ formreducer: state })

export default (connect(mapStateToProps)(Showdata));

