import React from 'react';  
import Team from './Team';

const Home = ({ teamsList }) => {

    const teamItem = teamsList.map(team => <Team key={ team.id } team={ team } />)

    return (
        <div>
        <h3>Teams List</h3>
        <ul>
          { teamItem }
        </ul>
    </div>
    )
}

export default Home;