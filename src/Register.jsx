import React, { useState } from 'react'
// import "./simple.css"
import { Link } from "react-router-dom";

function Register() {

    const [Data, SetData] = useState({
        fname: "",
        lname: "",
        DOB: "",
        age: "",
        gender: "",
        bp: "",
        cholesterol: "",
        heartrate: "",
        respirationrate: "",
        bmi: "",
        disbetes: "",
        medicalhistory: "",
        drugname: "",
        ndc: ""
    })

    const OnChangeHandler = (event) => {
        SetData({ ...Data, [event.target.name]: event.target.value })
    }

    const SubmitINFO = async (e) => {
        e.preventDefault();
        const { fname,
            lname,
            DOB,
            age,
            gender,
            bp,
            cholesterol,
            heartrate,
            respirationrate,
            bmi,
            disbetes,
            drugname,
            ndc,
        } = Data;
        
        console.log(Data);
        console.log(inputFields);

        fetch("http://localhost:8080/api/register", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname,
                lname,
                DOB,
                age,
                inputFields,
                gender,
                bp,
                cholesterol,
                heartrate,
                respirationrate,
                bmi,
                disbetes,
                drugname,
                ndc,
        })
        }).then((res) => res.json())
            .then((d) => {
                console.log(d)
                alert(d.msg)

            })

    }

    // for adding the new input field
    // const [counter, setCounter] = useState(0);

    // const handleClick = (e) => {
    //     e.preventDefault(); //main line to add the new prescription to the cunner line
    //     setCounter(counter + 1);
    //     console.log(counter);
    // };

    // new input fields logic

    const [inputFields, setInputFields] = useState([
        { precription: ''}
      ])
    
      const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
      }
    
      // adding more fields
      const addFields = (e) => {
        e.preventDefault();
        let newfield = { }
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
        <div>
            <div className="getuserdata">
                <Link to="/getdata"><button>Fetch User Data</button></Link>

            </div>
            <div className="main">
                <form action="">
                    <h2>Medicinal Registration</h2>
                    <div className="formcontainer">
                        <div className="info">
                            <input type="text" placeholder='Firstname' name='fname' onChange={OnChangeHandler} value={Data.fname} />
                            <input type="text" placeholder='lastname' name='lname' onChange={OnChangeHandler} value={Data.lname} />
                        </div>
                        <div className='info'>
                            <input type="text" placeholder='Date of Birth' name='DOB' onChange={OnChangeHandler} value={Data.DOB} />
                            <input type="text" placeholder='age' name='age' onChange={OnChangeHandler} value={Data.age} />
                        </div>

                        <div className="medicine-info">
                            <label for="gender">Gender:</label>
                            <select name="gender" value={Data.gender} onChange={OnChangeHandler}>
                                <option value="">Please select one…</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="non-binary">Non-Binary</option>
                                <option value="other">Other</option>
                                <option value="Prefer not to answer">Perfer not to Answer</option>
                            </select>

                            {/* dynamically added the input data  */}

                            <label htmlFor="">medical prescription</label>

                            {/* <div className="btnandinput"> */}
                            {/* <input type="text" name='prescription' value={Data.prescription} onChange={OnChangeHandler} placeholder='Ex. Which medicine you take' />  name='prescription' value={Data.prescription} */}
                            {/* <button className="addbtn" onClick={handleClick}>+</button> */}
                            {/* </div> */}
                            {/* {Array.from(Array(counter)).map((c, index) => { */}
                            {/* return <input key={c} name='prescription' className='dynamicinput' value={Data.prescription} onChange={OnChangeHandler} placeholder="Presctiptions" type="text"></input>; */}
                            {/* })} */}

                            {/* New code implementation */}
                            {inputFields.map((input, index) => {
                                return (
                                    <div className='btnandinput' key={index}>
                                        <input
                                            name='name'
                                            placeholder='Prescription'
                                            value={input.name}
                                            onChange={event => handleFormChange(index, event)}
                                        />
                                        <button onClick={() => removeFields(index)}>-</button>
                                    </div>
                                )
                            })}
                            <button onClick={addFields}>+</button>

                        </div>


                        <div className='medicine-info'>

                            <label htmlFor="">Drug Name</label>
                            <input type="text" name='drugname' value={Data.drugname} onChange={OnChangeHandler} placeholder="Drug Name" />

                            <label htmlFor="">NDC Code</label>
                            <input type="text" name='ndc' value={Data.ndc} onChange={OnChangeHandler} placeholder='NDC Code' />


                            <label htmlFor="">Blood Pressure Level</label>
                            <input type="text" name='bp' value={Data.bp} placeholder='122' onChange={OnChangeHandler} />
                            <label htmlFor="">Cholesterol Level</label>
                            <input type="text" name='cholesterol' value={Data.cholesterol} onChange={OnChangeHandler} placeholder=' 100 mg/dL' />

                            <label htmlFor="">Heart Rate</label>
                            <input type="number" name='heartrate' value={Data.heartrate} onChange={OnChangeHandler} placeholder='Heart Rate' />

                            <label htmlFor="">Respiration Rate</label>
                            <input type="text" placeholder='Respiration Rate'  name='respirationrate' value={Data.respirationrate}  onChange={OnChangeHandler} />

                            <label htmlFor="">BMI (body mass index)</label>
                            <input type="text" placeholder='BMI'  name='bmi' value={Data.bmi} onChange={OnChangeHandler} />

                            <label htmlFor="">Diabetes</label>
                            <input type="text" name='disbetes' value={Data.disbetes} onChange={OnChangeHandler} placeholder='Disbetes' />


                            {/* <label htmlFor="">Medical History</label> */}
                            {/* <textarea type="text" name='medicalhistory' onChange={OnChangeHandler} placeholder=' Medical History' /> */}
                        </div>
                    </div>
                    <button onClick={SubmitINFO}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register