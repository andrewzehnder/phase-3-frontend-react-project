import React from 'react';  
import Team from './Team';

const Home = ({ teamsList, updateSelectedTeam }) => {

    console.log("teamList2", teamsList)

    const teamItem = teamsList.map(team => <Team key={ team.id } team={ team } updateSelectedTeam={ updateSelectedTeam } />)

    return (
        <div>
        <h1>Team List</h1>
        <ul>
          { teamItem }
        </ul>
    </div>
    )
}

export default Home;