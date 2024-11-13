import React from 'react'
import Base from "../Base";
import { Button, TextField, Typography } from "@mui/material";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate()
    const[username,setUsername]=useState("")

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [err,setErr]=useState("")


    const handleSignup=async()=>{
        const payload={
            username,
            email,
            password
        }

        const res=await fetch("http://localhost:8070/api/user/signup",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json"
            }
        })
        const data=await res.json()
        if(data.token){
            setErr("")
            localStorage.setItem("token",data.token)
            navigate("/")
        }else{
            setErr(data.error)
        }
    }
  return (
    <Base title={"signup"}>
                <TextField fullWidth label="username" type="text" value={username} sx={{m:2}} onChange={(e)=>setUsername(e.target.value)}/>

        <TextField fullWidth label="email" type="email" value={email} sx={{m:2}} onChange={(e)=>setEmail(e.target.value)}/>
        <TextField fullWidth label="password" type="password" value={password} sx={{m:2}} onChange={(e)=>setPassword(e.target.value)}/>
        <Button type="submit" variant="contained" onClick={handleSignup}>
           SIGNUP
        </Button>
        {err?<Typography color="warning">{err}</Typography>:""}

    </Base>


  )
}
export default Signup