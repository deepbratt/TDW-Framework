import axios from 'axios'

const BASE_URL = "https://api.carokta.com/v1";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZGF0YSI6eyJpZCI6IjYxMWQwOTRlZThjMWJiMDAxZWNmYTRlOSJ9LCJpYXQiOjE2MjkyOTI5MTYsImV4cCI6NjgxMzI5MjkxNn0.gQFD2lGDOWDvncP03J8rLlzsvnfeI2I1a52ltwVBBDQ"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    'Authorization' : "Bearer "+token
  },
});
const axiosFormInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    // 'Content-Type': 'text/html',
    'Content-Type': 'multipart/form-data',
    "Access-Control-Allow-Origin": "*",
    'Authorization' : "Bearer "+token
  },
});

export const getCurrentUser=async()=>{
    try{
        const result = await axiosInstance.get("/Users/currentUser/")
        console.log(result)
        return result
    }catch(error:any){
        console.log("error",error)
        console.log("error response",error.response)
        return error.response
    }
}

export const addEditCarApi=async(dataBody: any, id="")=>{
    try{
        const result = id !=="" ? await axiosFormInstance.patch("/ads/cars/"+id, dataBody) : await axiosFormInstance.post("/ads/cars/", dataBody)
        console.log(result)
        return result
    }catch(error:any){
        console.log("error",error)
        console.log("error response",error.response)
        return error.response
    }
}
export const getCarById=async(id:string)=>{
    try{
        const result = await axiosInstance.get("/ads/cars/"+id)
        console.log(result)
        return result
    }catch(error:any){
        console.log("error",error)
        console.log("error response",error.response)
        return error.response
    }
}
export const deleteCarAd=async(id:string)=>{
    try{
        const result = await axiosInstance.delete("/ads/cars/"+id)
        console.log(result)
        return result
    }catch(error:any){
        console.log("error",error)
        console.log("error response",error.response)
        return error.response
    }
}