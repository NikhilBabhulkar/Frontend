import React from 'react'
import "././Home.css"
import { Link } from 'react-router-dom';
import Logo from "../../CSS/HealthSpek.png"

function Navbar() {
    const id = localStorage.getItem("id")
    const token = localStorage.getItem("token")

    if (token) {

        return (
            <div className="navigation">
                <div className="logo">
                    <Link to="/"> <img src={Logo} alt="" /></Link>
                </div>
                <div className="links">
                    <Link to='/'><li>HOME</li></Link>
                    <Link to={`/dashbord/${id}`}><li>Profile</li></Link>
                    <Link to='/'><li>LOGIN</li></Link>
                    <Link to='/'><li>SIGNUP</li></Link>
                </div>


            </div>
        )
    } else {
        return (
            <div className="navigation">
                <div className="logo">
                    <Link to="/"> <img src={Logo} alt="" /></Link>
                </div>
                <div className="links">
                    <Link to='/'><li>HOME</li></Link>
                    <Link to='/login'><li>LOGIN</li></Link>
                    <Link to='/signup'><li>SIGNUP</li></Link>
                </div>


            </div>
        )

    }
}

export default Navbar