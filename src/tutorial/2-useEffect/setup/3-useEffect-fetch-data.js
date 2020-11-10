import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  
  const [users, setUsers] = useState([]);
  
  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  //you cannot make useEffect async/await
  //when the 2nd parameter is an empty list, useEffect only runs on the initial render
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
    <h3>Github Users</h3>
    <ul className='users'>
    {users.map((u) => {
      const {id, login, avatar_url, html_url} = u;
      return <li key={id}>
        <img src={avatar_url} alt={login} />
        <div>
          <h4>{login}</h4>
          <a href={html_url}>profile</a>
        </div>
      </li>
    })}
    </ul>
    </>
    );
};

export default UseEffectFetchData;
