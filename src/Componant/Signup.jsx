import React, { useState } from 'react'
import "../Componant/CSS/Style.css"
import { useNavigate } from 'react-router-dom';
import Navbar from './Dashbord/Pages/Navbar';
import Doctors from "./Dashbord/Icons/doctors.png"
import {VscAdd} from 'react-icons/vsc'
import {CiCircleRemove} from "react-icons/ci"

function Signup() {
  const history = useNavigate();
  const [Data, SetData] = useState({
    fname: "",
    lname: "",
    age: "",
    gender: "",
    bp: "",
    heartrate: "",
    cholesterol: "",
    sugarlevel: "",
    respiration: "",
    bmi: ""

  })
  const OnchangeHandler = (event) => {
    SetData({ ...Data, [event.target.name]: event.target.value })
  }

  // code for the submission of data

  const SubmitINFO = async (e) => {
    e.preventDefault();
    const { fname,
      lname,
      age,
      gender,
      email,
      bp,
      heartrate,
      cholesterol,
      sugarlevel,
      respiration,
      bmi
    } = Data;

    console.log(Data);
    console.log(inputFields);

    fetch("http://localhost:3002/api/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname,
        lname,
        age,
        gender,
        email,
        bp,
        heartrate,
        cholesterol,
        sugarlevel,
        respiration,
        bmi,
        inputFields
      })
    }).then((res) => res.json())
      .then((d) => {
        // console.log(d)
        console.log(d.msg._id,"here");
        

      })

  }
  // Logic for the dynamically added input field

  const [inputFields, setInputFields] = useState([
    {}
  ])

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }

  // adding more fields
  const addFields = (e) => {
    e.preventDefault();
    let newfield = {}
    setInputFields([...inputFields, newfield])
  }

  // for removing the data 
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
    return false;
  }
  console.log(inputFields);


  return (
    <>
      <Navbar />
      <div className="main_container">

        <div className="left">
          <div className="left_main">

            <h2>Register</h2>
            <h4>Your Basic Information</h4>

            <div className="basicinfo">
              <div className='basicinfo1'>
                <div className="field">
                  <label htmlFor="">First Name</label>
                  <input onChange={OnchangeHandler} name='fname' value={Data.fname} type="text" placeholder='Enter Your Name' />
                </div>

                <div className="field">
                  <label htmlFor="">Last Name</label>
                  <input onChange={OnchangeHandler} name='lname' value={Data.lname} type="text" placeholder='Enter Your Surname' />
                </div>

              </div>

              <div className='basicinfo1'>
                <div className="field">
                  <label htmlFor="">Age</label>
                  <input onChange={OnchangeHandler} name='age' value={Data.age} type="text" placeholder='Enter Your Age' />
                </div>
                <div className="field">
                  <label for="gender">Gender</label>
                  <select onChange={OnchangeHandler} name="gender" value={Data.gender}  >
                    <option value="">Please select one…</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="other">Other</option>
                    <option value="Prefer not to answer">Perfer not to Answer</option>
                  </select>
                </div>
              </div>

              <div className='basicinfo1'>
                <div className="fieldE">
                  {/* <label htmlFor="">Email</label> */}
                  <input onChange={OnchangeHandler} name='email' value={Data.email} type="text" placeholder='Enter Your Email' />
                </div>
              </div>

            </div>

            {/* section second */}
            <div className="medicalinfo">
              <h4>Your Prescriptions</h4>
              <label htmlFor="">Current Medical Prescription</label>
              <div className="pfields">

                {inputFields.map((input, index) => {
                  return (
                    <>
                      <div className='pfield'>
                        <input
                          name='name'
                          placeholder='Date of Prescription'
                          value={input.name}
                          type='date'
                          onChange={event => handleFormChange(index, event)}
                        />
                        <input
                          name='prescription'
                          placeholder='Name Of Drug'
                          value={input.prescription}
                          onChange={event => handleFormChange(index, event)}
                        />
                        <button onClick={() => removeFields(index)}><CiCircleRemove/></button>
                        <button onClick={addFields}><VscAdd/></button>
                      </div> </>
                  )
                })}



              </div>
              {/* </div> */}

              <div className="fields">
                <div className="field">
                  <label htmlFor="">Blood Pressure Level</label>
                  <input onChange={OnchangeHandler} name='bp' value={Data.bp} placeholder='Blood Pressure Level' type="text" />
                </div>
                <div className="field">
                  <label htmlFor="">Heart Rate</label>
                  <input onChange={OnchangeHandler} placeholder='Heart Rate' name='heartrate' value={Data.heartrate} type="text" />
                </div>
              </div>

              <div className="fields">
                <div className="field">
                  <label htmlFor="">Cholesterol Level</label>
                  <input placeholder='Cholesterol Level' onChange={OnchangeHandler} name='cholesterol' value={Data.cholesterol} type="text" />
                </div>
                <div className="field">
                  <label htmlFor="">Sugar Level</label>
                  <input placeholder='Sugar Level' onChange={OnchangeHandler} name='sugarlevel' value={Data.sugarlevel} type="text" />
                </div>
              </div>

              <div className="fields">
                {/* <div className="field">
                <label htmlFor="">Respiration Rate</label>
                <input onChange={OnchangeHandler} name='respiration' value={Data.respiration} type="text" />
              </div> */}
                <div className="field">
                  <label htmlFor="">Respiration Rate</label>
                  <input type="text" onChange={OnchangeHandler} name='respiration' value={Data.respiration} placeholder='Respiration Rate' />
                </div>
                <div className="field">
                  <label htmlFor="">BMI</label>
                  <input type="text" placeholder='Body Mass Index' name='bmi' value={Data.bmi} onChange={OnchangeHandler} />
                </div>
              </div>


            </div>

            <div className='button'>
              <button onClick={SubmitINFO}>Submit</button>
            </div>

          </div>
        </div>

        {/* Right section */}

        <div className="right">
              <div className="img">
                <img src={Doctors} alt="" />
              </div>
        </div>

      </div>

    </>
  )
}

export default Signup