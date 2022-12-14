import React from 'react';
//import './styles/Register.css';

function Submit(href){
  fetch('', {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify() 
    });
  window.location.href = href
}

function Register({setuser}) {
  return (
    <div className="Register">   
      <input type='text' value="login" />
      <input type='text' value='password' />
      <button onClick={() => Submit('/')}>Submit</button>
    </div>
  );
}

export default Register;

