import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
})

// global error handling

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("API response received");
    return response
 },
 (error)=>{
    if(error.response){
        const status = error.response.status
        if(status===401){
            console.log("unauthorized access");
            
        }else if (status===404){
            console.log("API or resource not found");
            
        }else if (status===500){
            console.log("server error");
            
        }else{
            console.log("HTTP Error",status);
            
        }
    }else if(error.request){
        console.log("no response from server");
        
    }else{
        console.log("Error",error.message);
        
    }
    return Promise.reject(error)
 }
)
export default axiosInstance