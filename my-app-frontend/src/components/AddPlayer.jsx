import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const AddPlayer = ({ addPlayers }) => {

    const [player, setPlayer] = useState({
       first_name: "",
       last_name: "",
       position: "",
       university: "",
       years_of_experience: "",
       football_team_id: ""
    })

    const navigate = useNavigate(0);

    const handleSubmit = e => {
      e.preventDefault();
      fetch('http://localhost:9292/players/add', {
          method: "POST",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify(player)
      })
      .then(resp => resp.json())
      .then(data => {
        addPlayers(data);
          navigate(`/teams/${player.football_team_id}`);
      }) 
  }

  const handleChange = e => {
    setPlayer({
        ...player,
        [e.target.name]: e.target.value
    })
  }

  return (

    <div>
      <h1>Add New Player</h1>

      {/* Console errors about form. How do I move an onsubmit away from the form? OnClick? */}
      <form onSubmit={ handleSubmit }>

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
      <div>
        <TextField
          required
          id="first_name"
          label="First Name:"
          type="text"
          name="first_name"
          value={ player.first_name } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="last_name"
          label="Last Name:"
          type="text"
          name="last_name"
          value={ player.last_name } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="position"
          label="Position:"
          type="text"
          name="position"
          value={ player.position } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="university"
          label="University:"
          type="text"
          name="university"
          value={ player.university } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="years_of_experience"
          label="Years of Experience:"
          type="text"
          name="years_of_experience"
          value={ player.years_of_experience } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="football_team_id"
          label="Football Team ID:"
          type="text"
          name="football_team_id"
          value={ player.football_team_id } 
          onChange={ handleChange }
        />
        </div>

        </Box>

        <Button input type="submit" variant="outlined" >Save</Button>

      </form>
    </div>
  )
}

export default AddPlayer;