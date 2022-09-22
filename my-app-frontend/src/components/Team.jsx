import React from 'react'
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';


const Team = ({ team }) => {

    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };


  return(

    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <Link to={`/teams/${team.id}`} >{team.team_name}</Link>
      </ListItem>
      <Divider />
    </List>
    
  );
};

export default Team