import { resume } from "react-dom/server";
import axiosService from "../api/axosService";

// save resume API : called by ResumeInput componenet whwn finish button clicks

export const saveResumeApi = async (resumeDetails) => {
 return  await axiosService("POST","/resumes",resumeDetails)
}
 
// view resume api : called by view component when the page loads in browser
export const viewResumeApi = async (resumeId) => {
 return  await axiosService("GET",`/resumes/${resumeId}`,{})
}


// view all resume api : called by saved component when the page loads in browser
export const getAllResumeApi = async () => {
 return  await axiosService("GET",`/resumes/`,{})
}

//remove resumes Api: called by saved componenet when the delete button clicks
export const deleteResumeApi = async (resumeId)=>{
    return await axiosService("DELETE",`/resumes/${resumeId}`,{})
}

//update  resumes Api: called by edit componenet when the update  button clicks
export const editAllResumeApi = async (resumeId,resumeDetails)=>{
    return await axiosService("PUT",`/resumes/${resumeId}`,resumeDetails)
}