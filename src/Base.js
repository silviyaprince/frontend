import {AppBar,IconButton,Toolbar,Typography} from "@mui/material";
import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Base({title,description,children}) {
    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }
  return (
    <div className="main-container">
<header>
    <AppBar position="static">
<Toolbar variant="dense">
<Typography sx={{mr:2}}>
    INTERVIEW-NOTES APP
</Typography>
<IconButton edge="end" color="inherit" onClick={()=>navigate("/")} aria-label="dashboard" sx={{mr:2}}>
Dashboard
</IconButton>
<IconButton edge="end" color="inherit" onClick={()=>navigate("/account")} aria-label="user" sx={{mr:2}}>
My account
</IconButton>
<IconButton edge="end" color="inherit" onClick={()=>navigate("/signup")} aria-label="signup" sx={{mr:2}}>
Signup
</IconButton>
<IconButton edge="end" color="inherit" onClick={()=>navigate("/login")} aria-label="login" sx={{mr:2}}>
Login
</IconButton>
<IconButton edge="end" color="inherit" onClick={handleLogout} aria-label="logout" sx={{mr:2}}>
Logout
</IconButton>
</Toolbar>
    </AppBar>
</header>
<main>
    <h1>{title}</h1>
    <div className="content">{children}</div>
</main>
    </div>
  )
}
