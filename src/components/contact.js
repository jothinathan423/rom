import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, TextField, Typography } from "@mui/material"
import PublishIcon from '@mui/icons-material/Publish';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InputAdornment from '@mui/material/InputAdornment';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send'



const Contact = () => {
    return(<>
            <div style={{backgroundColor:'#e6f7ff',backgroundImage: 'url(IMG_20230708_163943.jpg)',backgroundAttachment:'fixed',backgroundRepeat:'no-repeat'}} >
        
        <div className="container-fluid "  href="/pit">
             <div className="row justify-content-center">
                 <div className="container align-self-center pt-5 pe-5 col-10 pb-5 bg-light col-xxl-5 col-xl-6 col-lg-7 col-md-8 my-3  rounded-4 col-5 shadow-lg">
                     <div className="row bg-body-secondary rounded-4" >
                         <Typography variant="h4" className="text-wrap me-3 p-xl-2 navbar-brand" color="secondary" >
                             Participation in Taste
                         </Typography>
                     </div>
                     <div className="row ps-lg-5">
                     <TextField
                         className="col-10 m-3 "
                         name="name"
                         label="Name Of The Faculity"
                         variant="outlined"        
                         InputProps={{
                             endAdornment: (
                             <InputAdornment >
                                 <AccountCircle />
                             </InputAdornment>
                                )
                             }}    
                       helperText="Alphabetic Charecters Only"  
                     />
                     <TextField
                         className="col-10 m-3"
                         name="date"
                         label="Date"
                         variant="outlined"
                         focused      
                         type="date"
                         helperText="Date Of The Event"
                     />
                      <TextField
                         className="col-10 m-3"
                         name="topic"
                         label="Seminar topic"
                         InputProps={{
                             endAdornment:(
                                 <SchoolIcon/>
                             )
                         }}
                         variant="outlined"             
                     />
                     <TextField
                         className="col-10 m-3"
                         name="taste"
                         label="Taste Number"
                         variant="outlined"    
                         type="number"   
                         helperText="Numbers Only"            
                     /> 
                     <TextField
                         className="col-10 m-3"
                         name="person"
                         label="Resourse Person Name"
                         variant="outlined"    
                         InputProps={{
                             endAdornment:(
                                 <PersonPinIcon/>
                             )
                         }}               
                     />
                      <TextField
                         className="col-10 m-3"
                         name="outcome"
                         label="Outcome Of The Activity"
                         multiline
                         rows={4}
                         variant="outlined"
                         InputProps={{
                             endAdornment:(
                                 <MailOutlineIcon/>
                             )
                         }}                 
                     />
                     </div>
                     <div className="row justify-content-around ">
                         <Button variant="contained" className="col-lg-2 col-5 mb-3 " color="success" startIcon={<PublishIcon/>} >Submit</Button>
                         <Button variant="outlined" className="col-lg-2 col-5 mb-3 " color="error" startIcon={<DeleteForeverIcon/>}>Clear</Button>

                     </div>
                 </div>
             </div>
        </div>
     
</div>;
    </>)
}

export default Contact