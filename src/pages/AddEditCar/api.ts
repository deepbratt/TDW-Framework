import axios from 'axios'

const BASE_URL = "https://api.tezdealz.com/v1";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZGF0YSI6eyJpZCI6IjYxMTkwMDMxYmY4ZTE4MDAxZTM0OGJhNiJ9LCJpYXQiOjE2MjkwMjg2MDcsImV4cCI6NjgxMzAyODYwN30.QDT0OdcxMPZHzILfnwX9xQv5qaQU4s7PsGzrA3r_Y-8"

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
    'Content-Type': 'multipart/form-data',
    "Access-Control-Allow-Origin": "*",
    'Authorization' : "Bearer "+token
  },
});

export const addEditCarApi=async(dataBody: any, id="")=>{
    try{
        const result = id ? await axiosFormInstance.patch("/ads/cars/"+id, dataBody) : await axiosFormInstance.post("/ads/cars/", dataBody)
        console.log(result)
        return result
    }catch(error){
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
    }catch(error){
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
    }catch(error){
        console.log("error",error)
        console.log("error response",error.response)
        return error.response
    }
}