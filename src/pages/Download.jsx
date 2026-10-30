import React, { useEffect, useState } from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import {getAllDownloadResumeApi} from '../service/apiService';



function Download() {

const [downlodList,setDownloadList] = useState([])
console.log(downlodList);


useEffect(()=>{
  getAllDownloads()
},[])

const getAllDownloads = async  ()=>{
  const result = await getAllDownloadResumeApi()
  setDownloadList(result.data)
}

  return (
    <div className='container my-5' > 
    <div className='d-flex justify-content-between align-items center' >
    <h3>Downoaded Resume History</h3>
    <Link to={'/resume-details'} > <IoMdArrowBack /> Back </Link>
    </div>

    <div className="row my-5 mt-5 ">
     {
      downlodList?.length>0?
      downlodList?.map(resume=>(
<div className="col-lg-4">
        <div style={{height:'300px'}} className='rounded shadow p-3' >
          <h6>Review at : {resume?.timeStamp}</h6>
          <div className='mt-4 text-center' >
            <Link to={`/resume/${resume?.resumeId}`}  > <img className='w-50'  src={resume?.resumeImg} alt="image" /> </Link>

          </div>

        </div>

      </div>
      ))
      :
      <div>no resumes </div>

     }
    </div>
      
    </div>
  )
}

export default Download


