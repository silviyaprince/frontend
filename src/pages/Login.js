import { Button, TextField, Typography } from "@mui/material";
import Base from "../Base";

import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [err,setErr]=useState("")


    const handleLogin=async()=>{
        const payload={
            email,
            password
        }

        const res=await fetch("http://localhost:8070/api/user/login",{
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
    <Base title={"login"}>
        <TextField fullWidth label="email" type="email" value={email} sx={{m:2}} onChange={(e)=>setEmail(e.target.value)}/>
        <TextField fullWidth label="password" type="password" value={password} sx={{m:2}} onChange={(e)=>setPassword(e.target.value)}/>
        <Button type="submit" variant="contained" onClick={handleLogin}>
            LOGIN
        </Button>
        {err?<Typography color="warning">{err}</Typography>:""}

    </Base>


  )
}

export default Login