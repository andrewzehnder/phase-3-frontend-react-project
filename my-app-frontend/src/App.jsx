import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Players from './components/Players';
import NavBar from './components/NavBar';
import AddPlayer from './components/AddPlayer';
import EditPlayer from './components/EditPlayer';
import './App.css';

const App = () => {
  const [teamsList, setTeamsList] = useState([])
  const [playersList, setPlayersList] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/teams')
    .then ((resp) => resp.json())
    .then ((team) => setTeamsList(team))
  }, [playersList]);

  useEffect(() => {
    fetch(`http://localhost:9292/players`)
    .then ((resp) => resp.json())
    .then ((player) => setPlayersList(player))
  }, []);

  console.log("teamsList", teamsList)

  const handleUpdatePlayers = player => {
    setPlayersList([...playersList, player]);
  }

  const handleDeletePlayer = id => {
    const updatedPlayersList = playersList.filter((player) => player.id !== id);
    setPlayersList(updatedPlayersList);
  }

  const handleAddTeam = team => {
    setTeamsList([...teamsList, team]);
  }

  const handleDeleteTeam = id => {
    const updatedTeamsList = teamsList.filter((team) => team.id !== id);
    setTeamsList(updatedTeamsList)
  }

  return (
      <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home teamsList={ teamsList } addTeam= { handleAddTeam }/>} />
            <Route path="/player/add" element={<AddPlayer updatePlayers={ handleUpdatePlayers } />} />
            <Route path="/teams/:id" element={<Players teamsList={ teamsList } deleteTeam={ handleDeleteTeam }/>} />
            <Route path="/player/:id/edit" element={<EditPlayer updatePlayers={ handleUpdatePlayers } deletePlayer={ handleDeletePlayer } teamsList={ teamsList }/>} />
          </Routes>
       </Router>
    );
}

export default App;
