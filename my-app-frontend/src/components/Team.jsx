import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Team = ({ team }) => {

      const card = (
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              <Link to={`/teams/${team.id}`} >{team.team_name}</Link>
            </Typography>
          </CardContent>
        </React.Fragment>
      );

  return(
      <Card variant="outlined">{card}</Card>
  );
};

export default Team