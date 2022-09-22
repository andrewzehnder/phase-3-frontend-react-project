//rafce

import React from 'react';
import { useParams, Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Players = ({ teamsList }) => {
    const id  = useParams();

    const selectedTeam = teamsList.find(team => team.id === parseInt(id.id))

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
            <TableCell align="right"></TableCell>
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
              <Link to={`/player/${player.id}/edit`} >Edit/Delete Player</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Players