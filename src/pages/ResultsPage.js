import React from 'react';
import Moment from 'react-moment';
import Results from '../components/Results';

import results from '../data.js';

function ResultsPage (props) {
    const date = props.match.params.date;
    const show = props.shows.find(show => `${show.date}` === date);
    return(
        <div className="container white-text text-center my-5">
            <h3 className="border-bottom pb-3 mx-auto w-75">Results from {show.location} on <span>
                <Moment
                    date={show.date}
                    parse='YYYY-MM-DD'
                    format= 'MMMM D, YYYY'
                /></span>
            </h3>
            <Results {...props} lastShow={false} results={results}/>
        </div>
    );
}

export default ResultsPage;
