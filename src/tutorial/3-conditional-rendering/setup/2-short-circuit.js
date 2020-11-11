import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
  <>


  {/* display one of two things */}
  {/* <h1>{text || 'if false: display john doe'}</h1> */}

  {/* display something or nothing at all */}
  {/* {text && <h1>if true: display hello world</h1>}
  {!text && <h1>if false: display hello world</h1>} */}

  <h1>{text || 'john doe'}</h1>  

  <button className='btn' onClick={()=> setIsError(!isError)}>Toggle Error</button>

  {isError && <h1>Error...</h1>}
  {isError ? <p>There is an error...</p> : <div><h2>There is no error</h2></div>}

  </>
  );
};

export default ShortCircuit;
