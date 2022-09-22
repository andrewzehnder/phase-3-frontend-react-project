import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const EditPlayer = ({ updatePlayers, deletePlayer }) => {
    const id  = useParams();
    const playerID = parseInt(id.id)
    const navigate = useNavigate(0);

    const [player, setPlayer] = useState({
        first_name: "",
        last_name: "",
        position: "",
        university: "",
        years_of_experience: "",
        football_team_id: ""
     })

    

    useEffect(() => {
        fetch(`http://localhost:9292/player/${playerID}`)
        .then ((resp) => resp.json())
        .then ((player) => setPlayer(player))
      }, []);

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:9292/player/${playerID}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player)
        })
        .then(resp => resp.json())
        .then(data => {
            updatePlayers(data);
            navigate(`/teams/${player.football_team_id}`);
        }) 
    }

    const handleDelete = () => {
        fetch(`http://localhost:9292/player/${playerID}`, {
            method: "DELETE",
        });

        deletePlayer(playerID)
        navigate(`/teams/${player.football_team_id}`);
    }

    const handleChange = e => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })
    }
   

      return (

        <div>
          <h1>Edit or Delete Player</h1>
    
          <form >
    
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
              type="number"
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
              type="number"
              name="football_team_id"
              value={ player.football_team_id } 
              onChange={ handleChange }
            />
            </div>
    
            </Box>
    
            <Button input type="submit" variant="outlined" onClick={ handleSubmit } >Save</Button>   <Button input type="submit" variant="outlined" onClick={ handleDelete } >Delete</Button>
    
          </form>
        </div>
      )
}

export default EditPlayer