import React, { useState } from 'react'; 
import { useNavigate } from "react-router-dom"; 
import Team from './Team';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Home = ({ teamsList, addTeam }) => {

  const navigate = useNavigate(0);

  const [team, setTeam] = useState({
    team_name: ""
  })

  const handleCreate = e => {
    e.preventDefault();
    fetch('http://localhost:9292/team/add', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(team)
    })
    .then(resp => resp.json())
    .then(data => {
      addTeam(data);
        navigate(`/`);
    }) 
  }

  const handleChange = e => {
    setTeam({
        ...team,
        [e.target.name]: e.target.value
    })
}

    return (
      <form>
        <h2>Teams List</h2>
        {/* How do I get it to look like a card? */}
        <Box>
          { teamsList.map(team => <Team key={ team.id } team={ team } />) }
        </Box>
        <br />
        <div>
        <TextField
          required
          id="team_name"
          label="New Team Name:"
          type="text"
          name="team_name"
          value={ team.team_name } 
          onChange={ handleChange }
        />
        </div>
        <br />
        <Button input type="submit" variant="outlined" onClick= {handleCreate} >Create</Button>
      </form>
    )
}

export default Home;