import React, { useEffect, useRef, useState } from 'react'
import { IoMdDocument } from "react-icons/io";
import Preview from '../Components/Preview';
import Edit from '../Components/Edit';
import { IoIosRefreshCircle } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { viewResumeApi } from '../service/apiService';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


function View() {

  const[resume,setResume]= useState()

  
  const {id}= useParams()
  // console.log(id);
 console.log(resume)
  
  useEffect(()=>{
    getResumeDetails()
  },[]) 

  const getResumeDetails = async () => {
    const response = await viewResumeApi(id)
    if (response.status===200){
      setResume(response.data)
      
    }
    
    
  }

  const previewRef = useRef ()

  const generatePDF = async () =>{
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
  const pdf = new jsPDF()
  const imageWidth = pdf.internal.pageSize.getWidth()
  const imageHeight = pdf.internal.pageSize.getHeight()
  pdf.addImage(canvas,"PNG",0,0,imageWidth,imageHeight)
  pdf.save("resume.pdf")
}
  

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navigation icon*/}
          <div className='d-flex justify-content-center align-items-center' >
          {/*Download*/}
          <Button onClick={generatePDF} > download CV</Button>
          {/*edit*/}
          <Edit resumeDetails={resume} setResumeDetails={setResume}/>
          {/* all resumes*/}
         {/* <Link style={{color: '#191619'}} to={'/all-resumes'} className='btn mx-2'><IoMdDocument /> All Resumes</Link>}
          {/* download history*/}
          {/*<Link style={{color:'#191619'}} to={'/downloads'} className='btn mx-2' > <IoIosRefreshCircle />Download History</Link>}
          {/*back*/}
          <Link style={{color:'#191619'}} to={'/resume-details'} className='btn mx-2' > <FaBackward />previous</Link>

        </div>
        <div ref={previewRef} className='p-5'>
          <Preview resumeDetails={resume}  />
        </div>
        <div className="col-lg-2"></div>
        </div>
      </div>
      
    </div >
  )
}

export default View
