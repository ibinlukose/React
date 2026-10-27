import React, { useEffect, useState } from 'react'
import { IoMdDocument } from "react-icons/io";
import Preview from '../Components/Preview';
import Edit from '../Components/Edit';
import { IoIosRefreshCircle } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { viewResumeApi } from '../service/apiService';



function View() {

  const[resume,setResume]= useState()

  const {id}= useParams()
  console.log(id);

  useEffect(()=>{
    getResumeDetails()
  },[]) 

  const getResumeDetails = async () => {
    const response = await viewResumeApi(id)
    if (response.status===200){
      setResume(response.data)
    }
    
    
  }
  

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navigation icon*/}
          <div className='d-flex justify-content-center align-items-center' >
          {/*Download*/}
          <Button> download CV</Button>
          {/*edit*/}
          <Edit resumeDetails={resume}/>
          {/* all resumes*/}
         {/* <Link style={{color: '#191619'}} to={'/all-resumes'} className='btn mx-2'><IoMdDocument /> All Resumes</Link>}
          {/* download history*/}
          {/*<Link style={{color:'#191619'}} to={'/downloads'} className='btn mx-2' > <IoIosRefreshCircle />Download History</Link>}
          {/*back*/}
          <Link style={{color:'#191619'}} to={'/resume-details'} className='btn mx-2' > <FaBackward />previous</Link>

        </div>
        <div className='p-5'>
          <Preview resumeDetails={resume} setResumeDetails={setResume}/>

        </div>
        <div className="col-lg-2"></div>
        </div>
      </div>
      
    </div>
  )
}

export default View
