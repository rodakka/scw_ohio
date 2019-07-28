import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { Link } from 'react-router-dom';

import '../css/results.css';

function UpcomingShows (props) {
    const homePage = props.isHomePage;
    const shows = props.shows;
    return (
        <MDBTable className="white-text">
            <MDBTableHead>
                <tr>
                    <th>Date</th>
                    <th>Location</th>
                    <th>First Bell</th>
                    {homePage === false ? <th>Results Link</th> : null}
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {shows.map(show => (
                    <tr key={show.date}>
                        <td>{show.date}</td>
                        <td>{show.location}</td>
                        <td>{show.bellTime}</td>
                        {homePage === false
                          ? <th>
                              <Link className="white-text" to={`results/${show.date}`}>
                                  See Results
                              </Link>
                            </th>
                          : null}
                    </tr>
                ))}
            </MDBTableBody>
        </MDBTable>
    );
}

export default UpcomingShows;
