import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Players from './components/Players';
import './App.css';

const App = () => {
  const [teamsList, setTeamsList] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/teams')
    .then ((resp) => resp.json())
    .then ((team) => setTeamsList(team))
  }, []);

  console.log("teamsList", teamsList)

  return (
      <Router>
          <Routes>
            <Route path="/" element={<Home teamsList={ teamsList } />} />
            <Route path="/teams/:id/players" element={<Players />} />
          </Routes>
       </Router>
    );
}

export default App;
