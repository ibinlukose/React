import React, { useEffect, useMemo, useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { deleteResumeApi, getAllResumeApi } from '../service/apiService';




function Saved() {

  const [allResumes,setAllResumes] = useState([])

  const [searchkey,setSearchKey] = useState("")
  const [dummyAllSearch,setDummyAllSearch]=useState([])
  console.log(searchkey);
  

useEffect(()=>{
  getAllResumes() 
},[])


const searchInput =useMemo( () =>{
  setAllResumes(dummyAllSearch.filter(item=>item.job.toLowerCase().includes(searchkey.toLowerCase())))
},[searchkey])

const getAllResumes = async ()=> {
  const response = await getAllResumeApi()
  if(response.status===200){
  setAllResumes(response.data)
  setDummyAllSearch(response.data)
  }
}

const removeResume = async (id)=> {
  if(confirm("are you sure ,do you want to delete this resume?")){
    const response = await deleteResumeApi(id)
    if(response.status===200){
      getAllResumes()
    }
  }
}

  return (
    <div  className='container d-flex justify-content-center align-items-center my-5 flex-column ' >
    <h3>All Saved Resumes </h3>
    <div className='d-flex justify-content-center align-items-center w-50 mt-3 ' >
<input onChange={(e)=>setSearchKey(e.target.value)} type="text" placeholder='search cnadidate by their job name ' className='form-control' />
</div>
    <table className="table table-hover table-stripped my-5">
      <thead>
        <tr className='table-dark' >
          <th>#</th>
          <th>Resume </th>
          <th>Job Role </th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {
          allResumes?.map((resume,index)=>(
            <tr key={resume?.id} >
          <td>{index+1}</td>
          <td><Link to={`/resume/${resume?.id}`}> {resume?.fullname}  </Link></td>
          <td> {resume?.job}</td>
          <td> <button onClick= { ()=>{removeResume(resume?.id)}}  className='btn btn-danger' ><FaTrash /></button> </td>
        </tr>
          ))
                


        }
      </tbody>

    </table>
    </div>
  )
}

export default Saved
