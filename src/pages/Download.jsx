import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';


function Download() {
  return (
    <div className='container my-5' > 
    <div className='d-flex justify-content-between align-items center' >
    <h3>Downoaded Resume History</h3>
    <Link to={'/resume-details'} > <IoMdArrowBack /> Back </Link>
    </div>

    <div className="row my-5 ">
      <div className="col-lg-4">
        <div style={{height:'300px'}} className='rounded shadow p-3' >
          <h6>Review at : Time stamp</h6>
          <div className='mt-4 text-center' >
            <Link to={'/resume/:id'}  > <img className='w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzZs7wdqhWzAk6f3_CzPeTCEqm8k9r5IYJVOBuei2pg&s=10" alt="" /> </Link>

          </div>

        </div>

      </div>
    </div>
      
    </div>
  )
}

export default Download
