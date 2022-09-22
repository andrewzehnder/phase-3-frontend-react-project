import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';


const Team = ({ team }) => {

    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };

  return(

    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <Link href={`http://localhost:3000/teams/${team.id}/players`}>{team.team_name}</Link>
      </ListItem>
      <Divider />
    </List>
    
  );
};

export default Team