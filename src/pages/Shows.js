import React from 'react';

import UpcomingShows from '../components/UpcomingShows';


function Shows (props) {
    return(
        <div className="container">
            <UpcomingShows isHomePage={false} shows={props.shows}/>
        </div>
    );
}

export default Shows;
