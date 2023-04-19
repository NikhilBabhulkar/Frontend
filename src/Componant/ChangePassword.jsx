import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../Componant/CSS/ChangePassword.css"
import { useNavigate } from 'react-router-dom';
import Sidebar from './Dashbord/Sidebar';
import Main from "./CSS/main.png"

function ChangePassword() {
  const Navigation = useNavigate();
  const id = localStorage.getItem("id")
  console.log(id);
  const [current, setCurrent] = useState('');
  const [password, setPassword] = useState('');
  const [passwordR, setPasswordR] = useState('');

  const changePassword = async () => {
    // perform validation on the inputs


    fetch(`http://localhost:3002/api/profile/${id}`)
      .then(res => res.json())
      .then(data => {
        //  console.log(JSON.stringify(data));
        console.log(data.password + " " + "this")
        if (data.password !== current) {
          return
        }

      })
      .catch(err => console.log(err));

    if (password !== passwordR) {
      alert('New password and confirm password do not match');
      return;
    }

    // call an API endpoint to update the password
    const response = await fetch(`http://localhost:3002/api/changepassword/${id}`, {
      method: 'POST',
      body: JSON.stringify({ current, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      alert('Password changed successfully');
      Navigation(`/dashbord/${id}`)
    } else {
      alert('Failed to change password');
    }
  };

  return (
    <>

      <Sidebar />
      <div className="Changepass-container">
        <div className="mainlogin">
          <div className="l">
            <form  className="login-form">
              <div className="changepassword">
                <h2>Change Your Password</h2>

                <input className='fc'
                  type="password"
                  placeholder="Enter current password"
                  value={current}
                  onChange={(event) => setCurrent(event.target.value)}
                />

                <input className='fc'
                  type="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <input className='fc'
                  type="password"
                  placeholder="Confirm new password"
                  value={passwordR}
                  onChange={(event) => setPasswordR(event.target.value)}
                />

                <button onClick={changePassword}>Change Password</button>
                </div>
            </form>
          </div>
          <div className="r">
            <img src={Main} alt="" />
          </div>
        </div>
      </div>

    </>
  );
}

export default ChangePassword;

      // <div className="mainpass">


      //   <div className="changepassword">
      //     <h2>Change Your Password</h2>

      //     <input
      //       type="password"
      //       placeholder="Enter current password"
      //       value={current}
      //       onChange={(event) => setCurrent(event.target.value)}
      //     />

      //     <input
      //       type="password"
      //       placeholder="Enter new password"
      //       value={password}
      //       onChange={(event) => setPassword(event.target.value)}
      //     />

      //     <input
      //       type="password"
      //       placeholder="Confirm new password"
      //       value={passwordR}
      //       onChange={(event) => setPasswordR(event.target.value)}
      //     />

      //     <button onClick={changePassword}>Change Password</button>
      //   </div>
      // </div>