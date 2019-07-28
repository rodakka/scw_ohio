import React from 'react';
import { MDBIcon } from 'mdbreact';

import '../css/results.css';

function Results (props) {
    const lastShow = props.lastShow;
    const matchData = props.matches;
    const results = props.results;

    let show = {};

    if(lastShow === true){
        if(matchData[matchData.length - 1].matches.length < 1){
            show = matchData[matchData.length - 2];
        } else {
            show= matchData[matchData.length - 1];
        }
    } else if (lastShow === false) {
        const date = props.match.params.date;
        show = results.find(show => `${show.date}` === date);
    }
    const matches = show.matches;
    console.log(show)
    return (
        <div className="white-text text-center">
            {matches.length >=1
                ? matches.map(match => (
                    <div key={match.id}>
                        {(match.isMainEvent === false)
                            ? <h5>Match #{match.id}</h5>
                            : <h5><MDBIcon icon="bell" className="pr-1" />MAIN EVENT<MDBIcon icon="bell" className="pl-1" /></h5>
                        }
                        <p>
                            <span className={match.fWWinner === true ? 'winner': null}>{match.firstWrestler} </span>
                            vs.
                            <span className={match.sWWinner === true ? 'winner' : null}> {match.secondWrestler}</span>
                        </p>
                    </div>
                ))
                : <h5 className="my-5">No Results Yet</h5>}
        </div>
    );

}

export default Results;
