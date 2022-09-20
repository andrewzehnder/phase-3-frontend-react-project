import React, {useEffect} from 'react';
import './App.css';

const App = () => {

  // useEffect(() => {
  //   fetch('http://localhost:9292/teams')
  //   .then ((resp) => resp.json())
  //   .then ((course) => setCourseList(course))
  // }, []);

  return (


    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
