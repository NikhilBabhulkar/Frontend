import React from 'react'
import Sidebar from '../Sidebar'
import "./Chat.css"

// const Pythonrun = () => {
//   const pythoncode = `
//   print("Hello World")
//   `;

//   const pyodine = window.pyodine;
//   pyodine.runPython(pythoncode)
// }


function Chat() {

  return (
    <>
      <div><Sidebar /></div>
      <div className="chatmain">
        <div className="questionbox">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Find Answer</button>
        </div>
        <div className="answer">
          As an AI language model, I am not qualified or authorized to provide medical advice. Medical advice should only be given by licensed healthcare professionals who have examined the patient and have access to their medical history and current condition.

          It is important to seek medical advice from a qualified healthcare professional for any health-related concerns or issues you may have. They are the best source of information and guidance for your health and well-being, and can provide you with personalized advice and treatment options based on your individual needs.
        </div>
        <button >RunPython</button>
      </div>
    </>

  )
}

export default Chat