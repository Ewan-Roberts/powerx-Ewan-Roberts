import React, { useState, useEffect } from 'react';
import './App.css';

function valiadateResponse(e, posts) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        capital: e.target.value,
        country: posts?.data?.country
      })
  };
  fetch('http://localhost:3000', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        alert(
          `
            ${data.message}
            The country: ${data.country}
            has the capital: ${data.capital}
          `
        )
        window.location.reload(false);
      });

}

function App() {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('http://localhost:3000')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2> What is the capital of </h2>

        <h3> {posts?.data?.country || 'Loading...'} </h3>

        <h2> Choose a captial </h2>

        <button value={posts?.data?.capitals[0]} onClick={(e) => valiadateResponse(e, posts)}> {posts?.data?.capitals[0] || 'Loading...'} </button>
        <br></br>
        <button onClick={(e) => valiadateResponse(e, posts)}> {posts?.data?.capitals[1] || 'Loading...'} </button>
        <br></br>
        <button onClick={(e) => valiadateResponse(e, posts)}> {posts?.data?.capitals[2] || 'Loading...'} </button>

      </header>
    </div>
  );
}

export default App;
