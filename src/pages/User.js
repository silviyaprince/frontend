import React, { useEffect, useState } from 'react'
import Base from "../Base";
import { useNavigate } from 'react-router-dom';
import { Button, Paper } from '@mui/material';
const User = ({usernotes,setUsernotes}) => {
  const navigate=useNavigate()
  const [error,setError]=useState("")

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login",{replace:true})
    }
    let token=localStorage.getItem("token")
    const fetchUserData=async()=>{
      const res=await fetch("http://localhost:8070/api/notes/user/all",{
      method:"GET",
      headers:{
        "x-auth-token":token,
      },
        
    })
   const data=await res.json()
   console.log(data)
   if(!data.data){
    setError(data.error)
   }else{
   setUsernotes(data.data)
   }
  }
   fetchUserData()
  },[])
  return (
<Base title={"user"}>
<div>
  <Button edge="end" color="inherit" aria-label="add-notes" onClick={()=>navigate("/add/notes")} >ADD NOTES</Button>
</div>
{usernotes &&(
  <div>
    {usernotes?.map((data)=>(
      <Paper elevation={6} key={data._id}>
        <p>Company Name:{data.companyName}</p>
        <p>Role:{data.role}</p>

        <p>Package:{data.package}</p>

        <p>Questions:{data.questions}</p>

        <p>Date:{data.date}</p>
        <p>Posted by:{data.user.username}</p>
<Button onClick={()=>navigate("/edit/notes/:id")}>EDIT</Button>
<Button onClick={()=>""}>DELETE</Button>

      </Paper>
    ))}
  </div>
)}
</Base>
  )
}

 
export default User