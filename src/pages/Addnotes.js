import { useNavigate } from "react-router-dom";
import Base from "../Base";


import React, { useEffect, useState } from 'react'
import { Button, TextField, Typography } from "@mui/material";

const Addnotes = ({usernotes,setUsernotes}) => {

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login",{replace:true})
    }
  },[])
  const[companyName,setCompanyName]=useState("")
  const[role,setRole]=useState("")

  const[pack,setPack]=useState("")

  const[questions,setQuestions]=useState("")
  const [error,setError]=useState("")
  const [message,setMessage]=useState("")

const navigate=useNavigate()

async function postNewNotes(){
  const notes={
    companyName,
    role,
    package:pack,
    questions
  }
  const res=await fetch("http://localhost:8070/api/notes/user/add",{
    method:"POST",
    body:JSON.stringify(notes),
    headers:{
      "Content-Type":"application/json",
      "x-auth-token":localStorage.getItem("token")
    }
  })
  const data=await res.json()
  if(!data.data){
   setError(data.err)
setMessage(data.message)
  }
  setUsernotes([...usernotes,data.data])
}

  return (
<Base title={"addnotes"}>
<form>
  <TextField label="Company Name" variant="outlined" value={companyName} onChange={(e)=>setCompanyName(e.target.value)}fullWidth sx={{m:3}}/>
  <TextField label="Role" variant="outlined" fullWidth  value={role} onChange={(e)=>setRole(e.target.value)} sx={{m:3}}/>
  <TextField label="Package" variant="outlined"  value={pack} onChange={(e)=>setPack(e.target.value)}  fullWidth sx={{m:3}}/>
  <TextField label="Questions" inputProps={{sx:{height:100}}} variant="outlined" fullWidth sx={{m:3}}  value={questions} onChange={(e)=>setQuestions(e.target.value)}/>
<Button type="submit" onClick={postNewNotes}>ADD NOTES</Button>
</form>
{error?<Typography color="warning">{error}</Typography>:""}
{message?<Typography color="warning">{message}</Typography>:""}
</Base>
  )
}

export default Addnotes