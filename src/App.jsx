import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('white'); 
  const [inputColor, setInputColor] = useState(''); 

  const handleInputChange = (e) => {
    setInputColor(e.target.value);
  };

  const handleChangeColor = () => {
    const div = document.createElement('div');
    div.style.color = inputColor;
    if (div.style.color === '') {
      alert('Invalid color  Please enter a valid color name or hex code.');
    } else {
      setBgColor(inputColor);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center text-center" style={{ backgroundColor: bgColor, height: '100vh' }}>
        <div className='bg-light  p-1 ' style={{width:"350px",border:"2px solid green",borderRadius:"20px" ,height:"400px", paddingTop:"50px" }}>
          <h4 className='text-danger'>Background Color Changer App</h4>
          <p style={{textAlign:"justify",padding:"10px"}}>
            Enter a color name (e.g., "red") or a hex code (e.g., "#ff0000") in the input field.
            When the "Change Background Color" button is clicked, the background color of the page changes to the specified color.
          </p>
          <input className='form-control'
            type="text" 
            value={inputColor} 
            onChange={handleInputChange} 
            placeholder="Enter a color or hex code" 
            style={{ padding: '10px', marginBottom:"20px", fontSize: '16px', marginRight: '10px' }}
          />
          <button className='btn btn-secondary text-primary fw-bolder form-control' onClick={handleChangeColor} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Change Background Color
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
