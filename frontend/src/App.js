import React, { useState, useEffect } from 'react';
import './App.css';

function valiadateResponse(event, posts) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        capital: event.target.value,
        country: posts?.country
      })
  };
  fetch('http://localhost:9090', requestOptions)
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
      fetch('http://localhost:9090')
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

        <h3> {posts?.country || 'Loading...'} </h3>

        <h2> Choose a captial </h2>

        <button
          value={(posts?.capitals)?posts?.capitals[0]:[]}
          onClick={(e) => valiadateResponse(e, posts)}> {
            (posts?.capitals)?
            posts?.capitals[0]:
            'Loading...'
          }
        </button>

        <br></br>

        <button
          value={(posts?.capitals)?posts?.capitals[1]:[]}
          onClick={(e) => valiadateResponse(e, posts)}> {
            (posts?.capitals)?
            posts?.capitals[1]:
            'Loading...'
          }
        </button>

        <br></br>

        <button
          value={(posts?.capitals)?posts?.capitals[2]:[]}
          onClick={(e) => valiadateResponse(e, posts)}> {
            (posts?.capitals)?
            posts?.capitals[2]:
            'Loading...'
          }
        </button>

        <br></br>
        <br></br>
        <br></br>

        <button
          onClick={(e) => window.location.reload(false)}> {
            'RESTART'
          }
        </button>

        <br></br>
      </header>
    </div>
  );
}

export default App;
