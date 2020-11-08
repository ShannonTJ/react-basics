import React, {useState} from 'react';
import { data } from '../../../data';



const UseStateArray = () => {
  
  const [people, setPeople] = useState(data);

  let doggoString = 'U・ᴥ・U';

  const doggo = (i) => {
    
    setPeople(people.map(
      (p) => { 

        if(p.id === i)
        {
          return {
            id: p.id,
            name: doggoString,
          }
        }
        else {
           return {
            id: p.id,
            name: p.name,
          }         
        }
      }
      ));    
    }

  const removeItem = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  }

  return (
  <React.Fragment>
    {people.map((person) =>
    {
      const {id, name} = person;

      return (
         <div key={id} className='item'> 
      <h4 onMouseOver={() => doggo(id)}>{id} {name}</h4>
      <button onClick={() => removeItem(id)}>Remove Item</button>
      </div>
      );
    })}

    <button className='btn' onClick={() => setPeople([])}>Clear Items</button>
  </React.Fragment>
  );
};

export default UseStateArray;
