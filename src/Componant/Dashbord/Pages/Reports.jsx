import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import "./Report.css"
import {
  FaSearch
}
  from "react-icons/fa"

function Reports() {

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


  return (
    <>
      <div><Sidebar /></div>
      <div className="sidebars">
        <div className="inputfield">
          <input name='value' value={value} onChange={handleInputChange} type="text" placeholder='Get Prescription By DOB' />
          <button onClick={Submit}><div id="search"><FaSearch /></div> </button>

        </div>

        <div className='prescriptionlist'>
          {filteredData.map(item => (
            <ul key={item['Claim Date of Drug']}>
            <li> <p>Prescriptions: {item.Prescriptions}</p>
              <p>Claim Date of Drug: {item['Claim Date of Drug']}</p>
              </li> 
            </ul>
          ))}
        </div>

      </div>
    </>

  )
}

export default Reports