import React from 'react';  
import Team from './Team';
import Box from '@mui/material/Box';

const Home = ({ teamsList }) => {


    return (
      <form>
        <h2>Teams List</h2>
        {/* How do I get it to look like a card? */}
        <Box>
          { teamsList.map(team => <Team key={ team.id } team={ team } />) }
        </Box>
        <br />
      </form>
    )
}

export default Home;