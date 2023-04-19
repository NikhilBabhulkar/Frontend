import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import '../Componant/CSS/Profile.css';

function Profile() {
  const navigate = useNavigate()
  const { id } = useParams();
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

  // if (localStorage.getItem('id') == null || localStorage.getItem('id') == "undifined") {
  //   const Logout = () => {
  //     navigate('/login')
  //   }
  // }


  // const Edit = () => {
  //   navigate(`/edit/${id}`);
  // }

  useEffect(() => {
    fetch(`http://localhost:3002/api/profile/${id}`
      .then(res => res.json())
      .then(data => {
        //  console.log(JSON.stringify(data.user));
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

      })
      .catch(err => console.log(err));
  });


  return (
    <div className="profile">
      <h1 className="profile__title">User Profile</h1>
      <div className="profile__info">
        <div className="profile__row">
          <span className="profile__label">Name:</span>
          <span className="profile__value">{user.fname} {user.lname}</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">Age:</span>
          <span className="profile__value">{user.age}</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">Gender:</span>
          <span className="profile__value">{user.gender}</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">Email:</span>
          <span className="profile__value">{user.email}</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">Blood Pressure:</span>
          <span className="profile__value">{user.bp}</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">Heart Rate:</span>
          <span className="profile__value">{user.heartrate}</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">Cholesterol:</span>
          <span className="profile__value">{user.cholesterol}</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">Sugar Level:</span>
          <span className="profile__value">{user.sugarlevel}</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">Respiration:</span>
          <span className="profile__value">{user.respiration}</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">BMI:</span>
          <span className="profile__value">{user.bmi}</span>
        </div>
        <div className="profile__row">
          <span className="profile__label">Prescription:</span>
          <ul className="profile__prescription">
            {user.prescription && user.prescription.map((item, index) => (
              <li key={index} className="profile__prescription-item">
                <span className="profile__prescription-name">{item.name}</span>
                <span className="profile__prescription-name">{item.prescription}</span>
                <span className="profile__prescription-details">
                  {item.prescription && Object.entries(item.prescription).map(([key, value]) => (
                    <div key={key}>
                      <span>{key}: </span>
                      <span>{value}</span>
                    </div>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <button onClick={Logout}>Logout</button>
      <button onClick={Edit}>Edit User detail</button>
      <button onClick={ChangePassword}>Change Password</button>
    </div>
  );
}

export default Profile;

