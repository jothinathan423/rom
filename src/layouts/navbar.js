
import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import logo from "../main-logo(1).png"
import backimg from "../IMG_20230708_163943.jpg"



import React, { useState } from 'react';


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

const NavBarExample = () => {
    return(
        <>
            

            {/* about is for NPTEL
                            contact is for tase */}
                            
            <Navbar collapseOnSelect expand="lg" className="bg-body-white">
      <Container fluid className=''>
        <Navbar.Brand href="#home" className=' col-md-6 col-xl-4 col-lg-3'>
                        <img src={logo} alt="Your Logo" className="img-fluid" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className='container'>
          <Nav>

            
            <div className='col-lg-4'>
            <span className='text-success font-weight-bold responsive-font fs-5'>Name:Dr.Arjun Rajput</span>
            </div>
            <div className='col-lg-2 ms-3 col-xl-2 my-1' >
            <span className='text-success font-weight-bold  responsive-font fs-5'>ID: 6064</span>
            </div>
            <div className='col-lg-1 col-xl-1'>
            <NavDropdown title="ECR" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ECR-1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
                ECR-2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ECR-3</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                ECR-4
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            <div className='col-lg-1 col-xxl-1'>
            <NavDropdown title="setAF" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Journal Publication</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Confrence Publication and Presentations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Workshop and Seminar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                TechTalks to be delivered Multidiciplinary Lectures
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Faculty Guest Talk in another institutions
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tables">
                NPTEL Certifications
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/contact">
                Participation in TASTE
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/home">
                e-Certificate(VIDEO LECTURE)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">visit to industries,institutions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.10">
                Seed Money Proposal For Research
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.11">
                Awards at National,International Level
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.12">
                Proposal Submission for Grants
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.13">
                Books,Chapter Authership
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.14">
                Consultancy and Corporate Training done for Revenue Generation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.15">
                Patents Filled,Pulished,Granted
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.16">
                Collaborative Activities with Mou Signed Industries,institutions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.17">
                Visit to the Library
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.18">
                Students Motivation for Paper Presentation,Project Submission,Other Contest
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.19">
                Professional Society Membership
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.20">
                Students Field Work,Internship Guidance
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            <div className='col-lg-2'>
            <NavDropdown title="SESTA" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SESTA-1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                SESTA-2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SESTA-3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                SESTA-4
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            <div className='col-lg-1'>
            <a class=" btn btn-outline-danger border-danger" href="#">LogOut</a>
            </div>
      
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>


            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}

export default NavBarExample