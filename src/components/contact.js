import { Button, TextField, Typography } from "@mui/material"
import PublishIcon from '@mui/icons-material/Publish';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InputAdornment from '@mui/material/InputAdornment';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import Homepg from "./home";
import { useState } from "react";

import backimg from "../IMG_20230708_163943.jpg"

const Content=()=>{
    const [data,setData]=useState({
        // "name":"",
        // "date":"",
        // "topic":"",
        // "taste":"",
        // "person":"",
        // "outcome":"",
        "faculty_name":"",
        "_date_":"",
        "seminar_topic":"",
        "taste_number":'',
        "resource_person_name":"",
        "outcome":"",

    })

    const collect=(event)=>{
        const{name,value}=event.target
        setData((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    const sendData=async()=>{
        alert(JSON.stringify(data))
        clear()
    }

    const clear=()=>{
        setData(()=>{
        return{
            // "name":"",
            // "date":"",
            // "topic":"",
            // "taste":"",
            // "person":"",
            // "outcome":"",
        "faculty_name":"",
        "_date_":"",
        "seminar_topic":"",
        "taste_number":'',
        "resource_person_name":"",
        "outcome":"",
        }
        })
    }

    return(
        <>
        {/* <Homepg/> */}
        <div style={{ backgroundImage: `url(${backimg})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat' }}>
           <div className="container">
            <div>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-11 m-5 shadow-lg rounded-4 " style={{backgroundColor: 'white'}}>
                        <div className="row bg-body-secondary rounded-4" >
                            <Typography variant="h4" className="text-wrap me-3 p-xl-2 navbar-brand" color="secondary" >
                                Participation in Taste
                            </Typography>
                        </div>
                        <div className="row ps-lg-5">
                        <TextField
                            className="col-11 m-3 "
                            name="faculty_name"
                            label="Name Of The Faculity"
                            variant="outlined"
                            onChange={collect}
                            value={data.faculty_name}       
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
                            className="col-11 m-3"
                            name="_date_"
                            label="Date"
                            variant="outlined"
                            focused      
                            onChange={collect}
                            value={data._date_} 
                            type="date"
                            helperText="Date Of The Event"
                        />
                         <TextField
                            className="col-11 m-3"
                            name="seminar_topic"
                            label="Seminar topic"
                            onChange={collect}
                            value={data.seminar_topic} 
                            InputProps={{
                                endAdornment:(
                                    <SchoolIcon/>
                                )
                            }}
                            variant="outlined"             
                        />
                        <TextField
                            className="col-11 m-3"
                            name="taste_number"
                            label="Taste Number"
                            variant="outlined"    
                            type="number"   
                            onChange={collect}
                            value={data.taste_number} 
                            helperText="Numbers Only"            
                        /> 
                        <TextField
                            className="col-11 m-3"
                            name="resource_person_name"
                            label="Resourse Person Name"
                            variant="outlined"
                            onChange={collect}
                            value={data.resource_person_name}     
                            InputProps={{
                                endAdornment:(
                                    <PersonPinIcon/>
                                )
                            }}               
                        />
                         <TextField
                            className="col-11 m-3"
                            name="outcome"
                            label="Outcome Of The Activity"
                            multiline
                            rows={4}
                            variant="outlined"
                            onChange={collect}
                            value={data.outcome} 
                            InputProps={{
                                endAdornment:(
                                    <MailOutlineIcon/>
                                )
                            }}                 
                        />
                        </div>
                        <div className="row justify-content-around ">
                            <Button variant="contained" className="col-lg-2 col-5 mb-3 " color="success" onClick={sendData} startIcon={<PublishIcon/>} >Submit</Button>
                            <Button variant="outlined" className="col-lg-2 col-5 mb-3 " color="error" onClick={clear} startIcon={<DeleteForeverIcon/>}>Clear</Button>

                        </div>
                    </div>
                </div>
                </div>
           </div>
           </div>
        </>
    )
}
export default Content