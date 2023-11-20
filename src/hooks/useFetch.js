import { useEffect, useState } from "react"
import { fetchApi } from "./fetch";

export  const useFetch = (endepoint)=>{
    const [data,setData]= useState(null);
    const [isLoading,setisLoading]= useState(false);
    const [error,setError]= useState(false);
    useEffect(()=>{
    const fetchData = async ()=>{
      try{
        setisLoading (true);
        const res = await fetchApi.get(endepoint);
        setData(res.data);
      }catch(e){
       setError(e);
       setisLoading(false);
      }
      
    setisLoading(false);
    }
    fetchData();

    },[endepoint])
    return {data,isLoading,error};
}