//rafce

import React from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const Players = ({ teamsList, deleteTeam, deletePlayer }) => {
    const id  = useParams();
    const football_team_id_int = parseInt(id.id);
    const navigate = useNavigate(0);

    const selectedTeam = teamsList.find(team => team.id === football_team_id_int)

    const handleDeletedTeam = () => {
      fetch(`http://localhost:9292/team/${selectedTeam.id}`, {
          method: "DELETE",
      });

      deleteTeam(selectedTeam.id)
      navigate(`/`);
  }

  const handleDeletedPlayer = (e) => {
    fetch(`http://localhost:9292/player/${e.target.id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(updatedState => {
        deletePlayer(updatedState);
        navigate(`/teams/${football_team_id_int}`);
    })    
}

  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Team Name</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">University</TableCell>
            <TableCell align="right">Years of Experience</TableCell>
            <TableCell align="right">Edit Player</TableCell>
            <TableCell align="right">Delete Player</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedTeam.football_players.map((player) => (
            <TableRow
              key={player.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{selectedTeam.team_name}</TableCell>
              <TableCell align="right">{player.first_name}</TableCell>
              <TableCell align="right">{player.last_name}</TableCell>
              <TableCell align="right">{player.position}</TableCell>
              <TableCell align="right">{player.university}</TableCell>
              <TableCell align="right">{player.years_of_experience}</TableCell>
              <TableCell align="right">
                <Link to={`/teams/${selectedTeam.id}/players/${player.id}`} >Edit</Link> 
              </TableCell>
              <TableCell align="right">
                <Button input type="submit" variant="outlined" onClick={ handleDeletedPlayer } id={player.id} >Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    <Button input type="submit" variant="outlined" onClick={ handleDeletedTeam } >Delete Team</Button>
    </TableContainer>
  )
}

export default Players