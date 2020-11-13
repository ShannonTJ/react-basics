import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const handleSubmit = (event) => {
    //default is to submit the form first thing, then refresh the page
    event.preventDefault();
    console.log('hello');
  }

  return (
    <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input type='text' id='firstName' name='firstName'></input>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input type='text' id='email' name='email'></input>
        </div>    
        <button type='submit' onClick={handleSubmit}>Add Person</button>    
      </form>
    </article>
    </>
  );
};

export default ControlledInputs;
