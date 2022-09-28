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

  useEffect(() => {
    fetch('http://localhost:9292/teams')
    .then ((resp) => resp.json())
    .then ((team) => setTeamsList(team))
  }, []);

  const handleAddPlayers = player => {
    const addPlayer = teamsList.map(team => team.id === player.football_team_id ? {...team, football_players: [...team.football_players, player]} : null)
    setTeamsList(addPlayer);
  }

  const handleUpdatePlayers = updatedState => {

// const teamobj = teamsList.find(team => team.id === updatedPlayer.football_team_id)
// console.log(teamobj)

// const foundTeamUpdatedFootballPlayers = teamobj.football_players.map(player => { 
//   if (player.id === updatedPlayer.id) {
//     return updatedPlayer;
//   }
//   else {
//     return player
//   }
// })
// console.log(foundTeamUpdatedFootballPlayers)

// teamobj.football_players = foundTeamUpdatedFootballPlayers

// console.log(teamobj)

// const updatedState = teamsList.map(team => {
//   if (team.id === updatedPlayer.football_team_id ) {
//     return teamobj
//   }
//   else {
//     return team
//   }
// })

  setTeamsList(updatedState)
  }

  const handleDeletePlayer = updatedState => {
   
    // const updatedTeam = teamsList.find((team) => deletedPlayer.football_team_id === team.id)

    // const updatedPlayersList = updatedTeam.football_players.filter((player) => player.id !== deletedPlayer.id)

    // updatedTeam.football_players = updatedPlayersList

    // const updatedState = teamsList.map(team => {
    //     if (deletedPlayer.football_team_id === team.id ) {
    //       return updatedTeam
    //     }
    //     else {
    //       return team
    //     }
    //   })
    
    
    setTeamsList(updatedState)
  }

  const handleAddTeam = updatedState => {
    setTeamsList(updatedState);
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
            <Route path="/players/add" element={<AddPlayer addPlayers={ handleAddPlayers } />} />
            <Route path="/teams/:id" element={<Players teamsList={ teamsList } deleteTeam={ handleDeleteTeam } deletePlayer={ handleDeletePlayer } />} />
            <Route path="/teams/:football_team_id/players/:id" element={<EditPlayer updatePlayers={ handleUpdatePlayers } teamsList={ teamsList }/>} />
          </Routes>
       </Router>
    );
}

export default App;
