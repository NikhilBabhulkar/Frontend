import React,{useState} from 'react'

function Inputs() {

  const [inputValues, setInputValues] = useState([]);

  const [numInputs, setNumInputs] = useState(1);
 
  


  const addInput = () => {
    setNumInputs(numInputs + 1);
    setInputValues([...inputValues, ""]);
  }
  

  return (
    <div>
      {inputValues.map((value, index) => (
        <div key={index}>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              const newValues = [...inputValues];
              newValues[index] = e.target.value;
              setInputValues(newValues);
            }}
          />
          <button
            onClick={() => {
              setNumInputs(numInputs - 1);
              setInputValues([
                ...inputValues.slice(0, index),
                ...inputValues.slice(index + 1),
              ]);
            }}
          >
            Sub
          </button>
        </div>
      ))}
      <button onClick={addInput}>Add</button>
    </div>
  );
  
}

export default Inputs