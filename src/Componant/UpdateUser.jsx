import React, { useEffect, useState } from 'react'
import "../Componant/CSS/Style.css"
import { useNavigate } from 'react-router-dom';
import Navbar from './Dashbord/Pages/Navbar';
import Doctors from "./Dashbord/Icons/doctors.png"
import { VscAdd } from 'react-icons/vsc'
import { CiCircleRemove } from "react-icons/ci"

function UpdateUser() {
  const history = useNavigate();
  const [Data, SetData] = useState({
    fname: "",
    lname: "",
    bp: "",
    heartrate: "",
    cholesterol: "",
    prescription: [],
    sugarlevel: "",
    respiration: "",
    bmi: ""

  })
  const OnchangeHandler = (event) => {
    SetData({ ...Data, [event.target.name]: event.target.value })
  }

  // code for the submission of data

  const SubmitINFO = async (e) => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    e.preventDefault();
    const {
      fname,
      lname,
      bp,
      heartrate,
      cholesterol,
      prescription,
      sugarlevel,
      respiration,
      bmi
    } = Data;


    console.log(Data);
    console.log(inputFields);

    try {
      fetch(`http://localhost:3002/api/updateuser/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          fname,
          lname,
          bp,
          heartrate,
          prescription,
          cholesterol,
          sugarlevel,
          respiration,
          bmi
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data, "  Time to redirect");
          history(`/dashbord/${id}`)
          // Do something with the response if necessary
        })
        .catch(error => {
          console.error(error, "error");
          // Handle errors if necessary
        });
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    const id = localStorage.getItem("id")
    const token = localStorage.getItem("token")
    fetch(`http://localhost:3002/api/profile/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {

        SetData({
          fname: data.fname,
          lname: data.lname,
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
      .catch(err => console.log(err, "e"));

  }, []);

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

            <h2>Update User Information</h2>
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
                        <button onClick={() => removeFields(index)}><CiCircleRemove /></button>
                        <button onClick={addFields}><VscAdd /></button>
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

export default UpdateUser