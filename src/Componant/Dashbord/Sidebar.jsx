import React, { useState } from 'react';
import "../CSS/Sidebar.css"
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,

} from "react-icons/fa";

import { HiHome } from "react-icons/hi"
import { CgProfile } from "react-icons/cg"
import { BsFillChatDotsFill } from "react-icons/bs"
import { RiLockPasswordLine } from "react-icons/ri"
import { BiEditAlt } from "react-icons/bi"
import Logo from "../CSS/HealthSpek.png"

import { BiLogOutCircle } from 'react-icons/bi'
import { NavLink, Navigate } from 'react-router-dom';


const Sidebar = (props, { children }) => {

    const Logout = () => {
        localStorage.removeItem('token')
        Navigate("/")
    }
    // console.log(props.id)
    const id = localStorage.getItem('id')
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <HiHome />
        },
        {
            path: `/dashbord/${id}`,
            name: "My Profile",
            icon: <CgProfile />
        },
        {
            path: `/chat/${id}`,
            name: "Chat",
            icon: <BsFillChatDotsFill />
        },
        {
            path: `/changepassword/${id}`,
            name: "Change Password",
            icon: <RiLockPasswordLine />
        },
        {
            path: `/edit/${id}`,
            name: "Edit User",
            icon: <BiEditAlt />
        },
        {
            path: `/login`,
            name: "Logout",
            icon: <BiLogOutCircle />
        }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "60px" }} className="sidebar">
                <div className="top_section">
                    {/* <img src={Logo} alt="" /> */}
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo"> LOGO</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => {
                        if (item.path !== "/login") {
                            return (
                                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                    <div className="icon">{item.icon}</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                                </NavLink>
                            )
                        } else {
                            <NavLink onClick={Logout} to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        }
                    })
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;