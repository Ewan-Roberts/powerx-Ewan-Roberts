import React, { useState, useEffect } from 'react';
import './App.css';

const API_ENDPOINT = 'http://localhost:9090';

function valiadateResponse(event, posts) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        capital: event.target.value,
        country: posts?.country
      })
  };
  fetch(API_ENDPOINT, requestOptions)
    .then(response => response.json())
    .then(data => {
      alert(
        `
          ${data.message}
          The country: ${data.country}
          has the capital: ${data.capital}
        `
      )
      .catch(err => alert(err.message));

      window.location.reload(false);
    });
}

function App() {
   const [quiz, setQuiz] = useState([]);
   useEffect(() => {
      fetch(API_ENDPOINT)
         .then(response => response.json())
         .then(data => setQuiz(data))
         .catch(err => alert(err.message));
   }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2> What is the capital of </h2>

        <h3> {quiz?.country || 'Loading...'} </h3>

        <h2> Choose a captial </h2>

        <button
          value={(quiz?.capitals)?quiz?.capitals[0]:[] }
          onClick={(e) => valiadateResponse(e, quiz)}> {
            (quiz?.capitals)?
            quiz?.capitals[0]:
            'Loading...'
          }
        </button>

        <br></br>

        <button
          value={(quiz?.capitals)?quiz?.capitals[1]:[]}
          onClick={(e) => valiadateResponse(e, quiz)}> {
            (quiz?.capitals)?
            quiz?.capitals[1]:
            'Loading...'
          }
        </button>

        <br></br>

        <button
          value={(quiz?.capitals)?quiz?.capitals[2]:[]}
          onClick={(e) => valiadateResponse(e, quiz)}> {
            (quiz?.capitals)?
            quiz?.capitals[2]:
            'Loading...'
          }
        </button>

        <br></br>
        <br></br>
        <br></br>

        <button
          onClick={() => window.location.reload(false)}> {
            'RESTART'
          }
        </button>

        <br></br>

      </header>
    </div>
  );
}

export default App;
