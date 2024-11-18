import Base from "../Base";
import { useNavigate } from "react-router-dom";
import React, { useState,useEffect } from 'react'
import { Paper } from "@mui/material";
const Dashboard = () => {
  const navigate=useNavigate()
  const [notes,setNotes]=useState([])
  const [error,setError]=useState("")

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login",{replace:true})
    }
    let token=localStorage.getItem("token")
    const fetchData=async()=>{
      const res=await fetch("http://localhost:8070/api/notes/all",{
      method:"GET",
      headers:{
        "x-auth-token":token,
      },
        
    })
   const data=await res.json()
   if(!data.data){
    setError(data.error)
   }else{
   setNotes(data.data)
   }
  }
   fetchData()
  },[])
  return (
<Base title={"dashboard"}>
{notes &&(
  <div>
    {notes?.map((data)=>(
      <Paper elevation={6} key={data._id}>
        <p>Company Name:{data.companyName}</p>
        <p>Role:{data.role}</p>

        <p>Package:{data.package}</p>

        <p>Questions:{data.questions}</p>

        <p>Date:{data.date}</p>
        <p>Posted by:{data.user.username}</p>

      </Paper>
    ))}
  </div>
)}
</Base>
  )
}

export default Dashboard