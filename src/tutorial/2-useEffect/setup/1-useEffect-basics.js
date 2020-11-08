import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

//useEffect is for handling changes outside of a component (side-effects)

const UseEffectBasics = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 0) {
      console.log('call useEffect');
      document.title = `New Messages (${value})`;
    }
    else {
      document.title = `No New Messages`;
    }
  }, [value]);

  useEffect(() => {
    console.log('hello world');
  }, []);

  return (
    <>
  <h1>{value}</h1>
  <button className='btn' onClick={() => setValue(value+1)}>Click Me</button>
  </>
  );
};

export default UseEffectBasics;
