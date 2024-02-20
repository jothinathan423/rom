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
const About = () => {
    return(
        <>
        <div className="" style={{backgroundImage: 'url(IMG_20230708_163943.jpg)',backgroundAttachment:'fixed',backgroundRepeat:'no-repeat'}}>
<div className="container align-self-center pt-5 pe-5 col-10 pb-5 bg-light col-xxl-5 col-xl-6 col-lg-7 col-md-8 my-3  rounded-4 col-5 shadow-lg" style={{ backgroundColor: 'white' }}>
    <h1>EVENT PROPOSAL</h1>
    <br />
    
    <br />
    <h3>NPTEL CERTIFICATION</h3><br />
    <form name="signup" >
    

 <Box sx={{ minWidth: 120 }}>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Academic Year</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Academic Year"
>
    <MenuItem value={2022-23}>2022-23</MenuItem>
    <MenuItem value={2023-2024}>2023-2024</MenuItem>
    </Select>
  </FormControl>
 </Box>


<span className="text-danger" id="errselectone"></span><br />
<Box sx={{ minWidth: 120 }}>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Semester</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Semester"
>
    <MenuItem value={"Odd Sem"}>odd Sem</MenuItem>
    <MenuItem value={"Even Sem"}>Even Sem</MenuItem>
    </Select>
  </FormControl>
</Box>
        
<span className="text-danger" id="errsem"></span><br />
<Box sx={{ minWidth: 120 }}>
  <FormControl fullWidth>
    <TextField
            name="facultyName" 
            label="faculty name"
            variant="outlined"
        />
  </FormControl>
</Box>            
       
<span className="text-danger" id="errfname"></span><br />
<Box sx={{ minWidth: 120 }}>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Year</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Year"
>
    <MenuItem value={"1"}>1</MenuItem>
    <MenuItem value={"2"}>2</MenuItem>
    <MenuItem value={"3"}>3</MenuItem>
    <MenuItem value={"4"}>4</MenuItem>
    </Select>
  </FormControl>
</Box>
        
        <span className="text-danger" id="erryear"></span><br />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
        <TextField         
            name="Session" 
            label="Session"
            variant="outlined"
        />
        </FormControl>
        </Box>
             
        
        <span id="errlname" className="text-danger"></span><br />
    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <TextField
                       
            name="courseName"
            label="Course Name"
            variant="outlined"
        />
        </FormControl>
    </Box>

       <span id="errcontact" className="text-danger"></span><br />
    <Box sx={{ minWidth: 120 }}>
       <FormControl fullWidth>
        <TextField
                       
            name="Score Obtained"
            label="score Obtained"
            variant="outlined"
        />
        </FormControl>
    </Box>
        <span id="erremail" className="text-danger"></span><br />
        <Box sx={{ minWidth: 120 }}>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Certificate Type</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Certificate Type"
>
    <MenuItem value={"GOLD"}>Gold</MenuItem>
    <MenuItem value={"Silver"}>Silver</MenuItem>
    <MenuItem value={"Elite"}>Elite</MenuItem>
    <MenuItem value={"Successfully Completed"}>successfully completed</MenuItem>
    </Select>
  </FormControl>
</Box>

<br/>
<div className='text-center'>
        <br/><div>
      <input
        accept="*"
        style={{ display: 'none' }}
        id="file-upload"
        type="file"
      />
      <label htmlFor="file-upload">
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file
        </Button>
      </label>
    </div>
            </div>
        <br/>
        <br/>

<div className='row text-center'>
        <br/>
          <div className="col justify-content-start mt-md-me-1">
          <Button variant="outlined" startIcon={<DeleteIcon />}>
             Clear
          </Button>
          </div>
          <br/>
          <div className=" col justify-content-start md-2">
          <Button variant="contained" endIcon={<SendIcon />}>
             Sumbit
          </Button>
          </div>
          <br/>
        
        <span id="errcertificate" className="text-danger"></span><br />
        </div>

   

        
    </form>
</div>
</div>;
        </>
    )
}

export default About