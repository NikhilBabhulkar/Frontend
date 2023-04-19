import React, { useState } from 'react'
import "./simple.css"

function UserData() {
  const [Data, SetData] = useState("")
  const [DobValue,SetDobValue] = useState("");
  console.log(DobValue);
  // usestate for storing the data and showing it on the site
  const [users, setusers] = useState([]);
  const onchange = (e) => {
    SetData(e.target.value)
  }

  const OnChange = (e) => {
    SetDobValue(e.target.value)
  }

  const GetData = (req, res) => {
    fetch(`http://localhost:8080/api/getdata/${Data}`)
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setusers(d)
        // alert(JSON.stringify(d))
      })
  }

  // serch by DOB
  // console.log(users +"ok");

  users.sort((a, b) => {
    a.DOB.localeCompare(b.DOB)
    console.log(a.DOB +" compare with "+b.DOB);
  });

  return (
    <>
      {/* {console.log(users)} */}

      <div className="search">
        <input type="text" name="user" value={Data} onChange={onchange} placeholder='Search By Name' />
        <input type="text" name="DobValue" value={DobValue} onChange={OnChange} placeholder='Search by Date of Birth' />
        <button onClick={GetData} className='userserch'>Search</button>
      </div>
      
      <div className="datacontainer">
        {
          users.map((data) => {
            console.log(data);

            if (data.ALTID === Data ) {
              if(DobValue === ""){
                return (
                  <>
                    <div className="data">
                      <p>ALT ID -  {data.ALTID}</p>
                      <p>Gender - {data.Gender}</p>
                      <p>Date of Birth - {data.DOB}</p>
                      <p>Member Id - {data.MemberId}</p>
                      <p>NDC Code - {data.NDCCode}</p>
                      <p>Drug Name - {data.DrugName}</p>
                      <p>Blood Group - {data.bloodgroup}</p>
                      <p>Name - {data.fname + " " + data.lname}</p>
                      <p>Blood pressure - {data.bp}</p>
                      <p>Cholesterol - {data.cholesterol}</p>
                    </div>
                  </>
  
                )
              }else{
                if(data.DOB === DobValue){
                  return (
                    <>
                      <div className="data">
                        <p>ALT ID -  {data.ALTID}</p>
                        <p>Gender - {data.Gender}</p>
                        <p>Date of Birth - {data.DOB}</p>
                        <p>Member Id - {data.MemberId}</p>
                        <p>NDC Code - {data.NDCCode}</p>
                        <p>Drug Name - {data.DrugName}</p>
                        <p>Blood Group - {data.bloodgroup}</p>
                        <p>Name - {data.fname + " " + data.lname}</p>
                        <p>Blood pressure - {data.bp}</p>
                        <p>Cholesterol - {data.cholesterol}</p>
                      </div>
                    </>
    
                  )
                }
              }
              
            }
          })
        }

      </div>
    </>
  )
}

export default UserData

// OSV0006