import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import UserData from "./Userdata"
import Inputs from './Componant/Inputs';
import Signup from './Componant/Signup';
import Login from './Componant/Login';
import UpdareUser from './Componant/UpdateUser';
import Chat from './Componant/Dashbord/Pages/Chat';
import Profiledashbord from './Componant/Dashbord/Pages/Profile';
import Reports from './Componant/Dashbord/Pages/Reports';
import ChangePassword from './Componant/ChangePassword';
import Home from './Componant/Dashbord/Pages/Home';
import Sidebar from './Componant/Newsidebar/Sidebar';
import Protecteds from './protecteds';



function App() {
  const token = localStorage.getItem("token")
  
  if(!token){
    return (
      <>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />}> </Route>
  
  
          <Route path='/login'  element={<Login />} />
          <Route path='/signup' element={<Signup />} />
  
          <Route path='/dashbord/:id' element={<Profiledashbord />} />
          <Route path="getdata" element={<UserData />} />
          <Route path='input' element={< Inputs />} />
          <Route path='/edit/:id' element={< UpdareUser />} />
          <Route path='/chat/:id' element={<  Chat />} />
          <Route path='/report/:id' element={<Reports />} />
          <Route path='/changepassword/:id' element={<ChangePassword />} />
          <Route path='/sidebar' element={<Sidebar />} />
        </Routes>
      </>
  
    )
  }else{
    return(
      <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />}> </Route>

        <Route path='/login' exact element={<Home />} />
        <Route path='/signup' element={<Home />} />

        <Route path='/dashbord/:id' element={<Profiledashbord />} />
        <Route path="getdata" element={<UserData />} />
        <Route path='input' element={< Inputs />} />
        <Route path='/edit/:id' element={< UpdareUser />} />
        <Route path='/chat/:id' element={<  Chat />} />
        <Route path='/report/:id' element={<Reports />} />
        <Route path='/changepassword/:id' element={<ChangePassword />} />
        <Route path='/sidebar' element={<Sidebar />} />
      </Routes>
    </>
    )
    
  }
  
}

export default App