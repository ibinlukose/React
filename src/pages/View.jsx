import React, { useEffect, useRef, useState } from 'react'
import { IoMdDocument } from "react-icons/io";
import Preview from '../Components/Preview';
import Edit from '../Components/Edit';
import { IoIosRefreshCircle } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { downloadAllResumeApi, viewResumeApi } from '../service/apiService';
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

  const downloadCv = async () =>{
  const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
    canvas.toBlob(async(imgFile)=>{
      //create formdata to send file via api
      const formData = new FormData()
      formData.append("file",imgFile)
      formData.append("upload_preset","my-resume")

      const result = await fetch("https://api.cloudinary.com/v1_1/hg8j808s/image/upload",{
       method:"POST",
       body : formData
      })
      const serverData = await result.json()
      const url = serverData.secure_url
      // console.log(url);
      generatePDF(url)

    })
  }

  const generatePDF = async (resumeImg) =>{
  
  const pdf = new jsPDF()
  const imageWidth = pdf.internal.pageSize.getWidth()
  const imageHeight = pdf.internal.pageSize.getHeight()
  pdf.addImage(resumeImg,"PNG",0,0,imageWidth,imageHeight)

  

  const today = new Date()
  const timeStamp = `${today.toLocaleDateString()},${today.toLocaleTimeString()}`
  console.log(timeStamp);

  const result = await downloadAllResumeApi({timeStamp,resumeImg,resumeId:resume.id,jobRole:resume.job})

  if(result.status===201){
 pdf.save(`${resume.fullname}CV.pdf`)
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
          <Button onClick={downloadCv} > download CV</Button>
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
