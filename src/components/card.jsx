import React, { useState } from 'react';
import'../components/mystyles.css'
import html2canvas from 'html2canvas';





function NewYearResolutionTemplate() {
  const [resolutions, setResolutions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const resolution = formData.get('resolution');
    setResolutions([...resolutions, resolution]);
  };

  const handleClick = () => {
    html2canvas(document.querySelector('#capture')).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'my-resolutions.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className='hero'>
      <h1 className='tittle'>write your TODO's  </h1>
      <form className='form' onSubmit={handleSubmit}>
      
        <label htmlFor="resolution">
          Enter your task:
        </label>
        <input id=" " name="resolution" type="text" />
        <button className='btn' type="submit">Add</button>
      </form>
      <div className='wish'>
        
        <ul id="capture">
        {resolutions.map((resolution, index) => (
         
          <li className='card' key={index}>{resolution}</li>
        ))}
      </ul>
      <button className='button1' onClick={handleClick}>
        Download image
      </button>
      <h2 className='year1'>HAVE A GREAT DAY</h2>
      <p>made with ❤️</p>
      </div>
      

      
    </div>
  );
}

export default NewYearResolutionTemplate