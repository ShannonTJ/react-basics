import React, { useState } from 'react';

//useState is a function from react, the name needs to be exact
//component names must be capitalized 
//hooks must be put in the component body
//cannot call the hook conditionally (don't put the hook inside the if-parentheses)

const UseStateBasics = () => {
  // console.log(useState('hello'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState('Random Title');

  const handleClick = () => {
    if(text === 'Random Title') {
      setText('New Title');
    }
    else {
      setText('Random Title');
    }
}

  return (
  <React.Fragment>
    <h1>{text}</h1>
    <button type='button' className='btn' onClick={handleClick}>This Button Changes The Title</button>
  </React.Fragment>
  );
};

export default UseStateBasics;
