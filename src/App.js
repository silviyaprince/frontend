
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Addnotes from './pages/Addnotes';
import Dashboard from './pages/Dashboard';
import Editnotes from './pages/Editnotes';
import Login from './pages/Login';
import User from "./pages/User"
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import { useState } from 'react';
function App() {
const [usernotes,setUsernotes]=useState([])

  return (
    <div className="App">
     <Routes>
      <Route exact path="/" element={<Dashboard/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/signup" element={<Signup/>}/>

      <Route  path="/logout" element={<Logout/>}/>
     <Route  path="/account" element={<User usernotes={usernotes} setUsernotes={setUsernotes}/>}/>
     <Route  path="/add/notes" element={<Addnotes usernotes={usernotes} setUsernotes={setUsernotes}/>}/>
    <Route  path="/edit/notes/:id" element={<Editnotes/>}/>


     </Routes>
    </div>
  );
}

export default App;
