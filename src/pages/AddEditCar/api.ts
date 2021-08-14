import axios from 'axios'

const BASE_URL = "https://api.tezdealz.com/v1";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZGF0YSI6eyJpZCI6IjYxMDM3NWVkNmI4OTdhMDAxZDg2NGNhMSJ9LCJpYXQiOjE2Mjg5NjY2MTksImV4cCI6NjgxMjk2NjYxOX0.3JTF7Aa_TvsRbC2DkPq9gmlsuGI96JSKu1VKZ5oQT_4"

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