import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';


function Header() {
  const title = "An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF." 

  return (
     <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static" sx={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        <img width={'50px'} src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-resume-icon-png-image_1018862.jpg" alt="icon" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <Link to={'/'} className='text-light text-decoration-none' >AI rBUILDER</Link>   
          </Typography>

           <Link   to={'/all-resumes'} className='btn mx-2'>All Resumes</Link>
       <Link  to={'/downloads'} className='btn mx-2' >Download History</Link>
        
        <Tooltip title={title} >  <Button color="inherit">About Us</Button></Tooltip>
       
          </Toolbar>
        
      </AppBar>
    </Box>
  )
}

export default Header
