import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom"

function Protecteds() {
  const navigation = useNavigate()
  const id = localStorage.getItem("token")
  console.log(id,"this is id");
  if (id) {
    return <Outlet />
  } else {
    return (
      navigation("/")
    )
  }

}

export default Protecteds