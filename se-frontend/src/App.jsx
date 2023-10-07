import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.post('http://localhost:3000/home', {})
      .then(response => {
        // Handle the successful response
        // console.log('Response:', response.data);
        console.log('Response:', response.data);
      })
      .catch(error => {
        // Handle the error
        console.error('Error:', error);
      });
  }, [])

  return (
    <>
      <div className="text-red-600">hello red</div>
    </>
  );
}

export default App;
