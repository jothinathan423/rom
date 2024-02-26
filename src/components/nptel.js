import React, { useState } from 'react';
import { Button, TextField, MenuItem, FormControl, InputLabel, Select } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import axios from 'axios';
import backimg from "../IMG_20230708_163943.jpg"



const NptelCert = () => {
    const [profile, setProfile] = useState({
        academicyear: "",
        semester: "",
        facultyname: "",
        year: "",
        session: "",
        coursename: "",
        scoreobtained: 0,
        certificatetype: "",
        certificatepdf: ""
    });

    const [category, setCategory] = useState("Select Year");
    const [cotton, setCotton] = useState("Select semester");
    const [candie, setCandie] = useState("select year");
    const [certificate, setCertificate] = useState("Select certificate");

    const handleChange = (event) => {
        setCategory(event.target.value);
    }

    const cottonChange = (event) => {
        setCotton(event.target.value);
    }

    const candieChange = (event) => {
        setCandie(event.target.value);
    }

    const certificateChange = (event) => {
        setCertificate(event.target.value);
    }

    const myCollect = (eve) => {
        const { name, value } = eve.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    }

    

    const handleSubmit = async (event) => {
      profile.academicyear = category;
        profile.semester=cotton;
        profile.year=candie;
        profile.certificatetype=certificate;
      event.preventDefault();
      try {
          const response = await axios.post('http://localhost:3001/create', profile);
          console.log('Data submitted successfully');
          alert("Information has been successfully submitted");
      } catch (error) {
          console.error('Error submitting data:', error);
          alert("Failed to submit information");
      }
  }

   

    return (
        <div className='p-3' style={{ backgroundImage: `url(${backimg})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}>

            <div className="container align-self-center pt-5 pe-5 col-10 pb-5 bg-light col-xxl-5 col-xl-6 col-lg-7 col-md-8 my-3  rounded-4 col-5 shadow-lg" style={{ backgroundColor: 'white' }}>
                <h1>EVENT PROPOSAL</h1>
                <br />
                <br />
                <h3>NPTEL CERTIFICATION</h3><br />
                <form onSubmit={handleSubmit} name="signup">
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Academic Year</InputLabel>
                        <Select
                            onChange={handleChange}
                            labelId="demo-simple-select-label"
                            label="Academic Year"
                            id="academicyear"
                            value={category}
                        >
                            <MenuItem value="Select Year">select year</MenuItem>
                            <MenuItem value="2022-23">2022-23</MenuItem>
                            <MenuItem value="2023-2024">2023-2024</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    <br />
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                        <Select
                            onChange={cottonChange}
                            labelId="demo-simple-select-label"
                            label="Semester"
                            id="semester"
                            name="semester"
                            value={cotton}
                        >
                            <MenuItem value="Select semester">select semester</MenuItem>
                            <MenuItem value="Odd Sem">Odd Sem</MenuItem>
                            <MenuItem value="Even Sem">Even Sem</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    <br />
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                    <TextField
                        fullWidth
                        onChange={myCollect}
                        name="facultyname"
                        label="Faculty Name"
                        variant="outlined"
                        id="facultyname"
                        value={profile.facultyname}
                    />
                    </FormControl>
                    </Box>
                    <br />
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Year</InputLabel>
                        <Select
                            onChange={candieChange}
                            labelId="demo-simple-select-label"
                            id="year"
                            label="Year"
                            variant="outlined"
                            value={candie}
                        >
                            <MenuItem value="select year">select year</MenuItem>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    <br />
                    <Box sx={{ minWidth: 120 }}>
                    <TextField
                        fullWidth
                        onChange={myCollect}
                        name="session"
                        label="Session"
                        variant="outlined"
                        id="session"
                        value={profile.session}
                    />
                    </Box>
                    <br />
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                    
                    <TextField
                    
                        fullWidth
                        onChange={myCollect}
                        name="coursename"
                        label="Course Name"
                        variant="outlined"
                        id="coursename"
                        value={profile.coursename}
                    />
                    </FormControl>
                    </Box>
                    <br />
                    <TextField
                        fullWidth
                        onChange={myCollect}
                        name="scoreobtained"
                        label="Score Obtained"
                        variant="outlined"
                        value={profile.scoreobtained}
                    />
                    <br />
                    <br />
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Certificate Type</InputLabel>
                        <Select
                            onChange={certificateChange}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="certificatetype"
                            label="Certificate Type"
                            value={certificate}
                        >
                            <MenuItem value="Select certificate">select certificate type</MenuItem>
                            <MenuItem value="GOLD">Gold</MenuItem>
                            <MenuItem value="Silver">Silver</MenuItem>
                            <MenuItem value="Elite">Elite</MenuItem>
                            <MenuItem value="Successfully Completed">successfully completed</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    <br />
                    <div className='text-center'>
                        <div class="mb-3">
                            <label htmlFor="formFile" class="form-label">Certificate-Pdf</label>
                            <input
                                name="certificatepdf"
                                class="form-control"
                                type="file"
                                onChange={myCollect}
                                id="formFile"
                            />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='row text-center'>
                        <div className="col justify-content-start mt-md-me-1">
                            <Button variant="outlined" multiple type="reset" startIcon={<DeleteIcon />}>
                                Clear
                            </Button>
                        </div>
                        <div className="col justify-content-start md-2">
                            <Button variant="contained" multiple type="submit" endIcon={<SendIcon />}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NptelCert;
