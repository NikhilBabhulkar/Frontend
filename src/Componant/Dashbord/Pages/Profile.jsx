import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar'
import "../Pages/main.css"
import Yoga from "../../CSS/yoga.png"
import { TbBrandSugarizer } from "react-icons/tb"
import { BsHeartPulseFill } from "react-icons/bs"
import { MdBloodtype } from "react-icons/md"

import {
  FaChild,
  FaSearch
}
  from "react-icons/fa"
import ProfilePic from "../Icons/user.png"


function Profile() {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  // fetching the data by dob
  const [value, Setvalue] = useState("")
  const [responseData, setResponseData] = useState([]);
  function handleInputChange(event) {
    Setvalue(event.target.value);
  }

  const filteredData = responseData.filter(item => {
    return item['Date of Birth'] === value;
  });


  const Submit = () => {
    fetch('http://localhost:3002/api/getprescription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: value })
    })
      .then(response => response.json())
      .then(data => {
        setResponseData(data);
        // console.log('Response received:', data);
      })
      .catch(error => {
        console.error('Error sending value:', error);
      });

  }

  // Getting the date and month
  const today = new Date();
  const date = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });

  // const navigate = useNavigate()
  const { id } = useParams();
  localStorage.setItem("id", id)
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    age: "",
    gender: "",
    email: "",
    bp: "",
    heartrate: "",
    prescription: [],
    cholesterol: "",
    sugarlevel: "",
    respiration: "",
    bmi: ""
  });

  const Logout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    navigate("/")
  }


  useEffect(() => {
    if (token) {
      fetch(`http://localhost:3002/api/profile/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          //  console.log(JSON.stringify(data));
          setUser({
            fname: data.fname,
            lname: data.lname,
            age: data.age,
            gender: data.gender,
            bp: data.bp,
            email: data.email,
            heartrate: data.heartrate,
            prescription: data.prescription,
            cholesterol: data.cholesterol,
            sugarlevel: data.sugarlevel,
            respiration: data.respiration,
            bmi: data.bmi
          });
          console.log("how many time ");
        })
        .catch(err => console.log(err,"e"));
    } else (
      navigate("/")
    )
  }, []);



  if (token) {
    return (
      <>

        <Sidebar id={id} />
        <div className="mainp">

          <div id="logoutbutton">
            <button onClick={Logout}>Logout</button>
          </div>

          <div className="handle">
            <div className='ldiv'>

              <div className="mainprofile">
                <div className="mainprofile1">
                  <div className='c'>
                    <h1>Hello ,<span>{user.fname} {user.lname}</span></h1>
                    <p>Have a nice day don’t forget to take care
                      of your health!</p>
                  </div>

                  <img src={Yoga} alt="" />


                </div>


                <div className="mainprofile2">
                  <div className="box">
                    <div className='heartandrate'>
                      <div id='hearticon'><BsHeartPulseFill /></div>

                      <h5>{user.heartrate}</h5>
                    </div>
                    <div className="heartratecontent">
                      <h6>Heart rate</h6>
                      <p>pulse is the most important
                        physiological indicators</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="blood">
                      <div id='sugar_icon'><MdBloodtype /></div>
                      <h5>{user.bp}</h5>
                    </div>
                    <div className="bloodcontent">
                      <h6>Blood Pressure</h6>
                      <p>Blood pressure can rise and
                        fail several times a day</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="bmitop">
                      <div id="bmiicon"><FaChild /> </div>
                      <h5>{user.bmi}</h5>
                    </div>
                    <div className="bmicontent">
                      <h6>Body Mass Index</h6>
                      <p>your BMI is 18.5 to 24.9, it falls within the Healthy Weight range</p>
                    </div>
                  </div>


                  <div className="box">
                    <div className="bmitop">
                      <div id='sugar_icon'><TbBrandSugarizer /></div>
                      <h5>{user.sugarlevel}</h5>
                    </div>
                    <div className="bmicontent">
                      <h6>Sugar Level</h6>
                      <p>A condition characterized by high levels of sugar in the blood.</p>
                    </div>
                  </div>

                </div>
                <div className="mainprofile3">
                  <div className="box">
                    <h4>Your Prescriptions</h4>
                    <div className="Prescrioncontainer">

                      {user.prescription.map((item) => (
                        <div className="prescriptiondata" key={item.name}>
                          <p>{item.name}</p>
                          <p>{item.prescription}</p>
                        </div>

                      ))}

                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div className="rdiv">
              <div className="top">
                <img src={ProfilePic} alt="" />
                <h5>{user.fname} {user.lname}</h5>

              </div>
              <div className="datem">
                <div className="date">
                  <div className="month">
                    {month} {date}
                  </div>
                </div>
              </div>

              <div className="doctorappoitment">
                <div className=" serchbox">
                  <input type='text' name='value' value={value} onChange={handleInputChange} placeholder='Get prescription By DOB' />
                  <div id="serchdate" onClick={Submit}><FaSearch /></div>
                </div>


                {filteredData.map(item => (
                  <ul key={item['Claim Date of Drug']}>
                    <div className="box">
                      <li> <p>Prescriptions: {item.Prescriptions}</p>
                        <p>Claim Date of Drug: {item['Claim Date of Drug']}</p>

                      </li>
                    </div>
                  </ul>
                ))}


              </div>

            </div>
          </div>


        </div>
      </>
    )
  }
  return (
    navigate("/login")
  )



}

export default Profile