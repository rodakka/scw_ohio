import React, { Component } from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

import Jumbotron from '../components/Jumbotron';
import comingSoon from '../img/comingSoon.jpg'
import Results from '../components/Results';
import UpcomingShows from '../components/UpcomingShows';
import Carousel from '../components/Carousel';

import matches from '../data.js';
import images from '../images.js';

import upcoming from '../upcomingShows.js';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <MDBContainer className="white-text text-center">
                    <MDBRow>
                        <MDBCol>
                            <Jumbotron image={comingSoon}/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="5" className="border-right">
                            <h3 className="border-bottom pb-2 mx-auto w-75">Results From Our Last Show</h3>
                            <Results lastShow={true} matches={matches} />
                        </MDBCol>
                        <MDBCol md="7">
                            <MDBRow>
                                <MDBCol md="12">
                                    <h3 className="border-bottom pb-2 mx-auto w-75">Upcoming Shows</h3>
                                    <UpcomingShows isHomePage={true} shows={upcoming} lastShow={true}/>
                                </MDBCol>
                            </MDBRow>
                            <hr className="border border-danger" />
                            <MDBRow>
                                <MDBCol md="12" className="text-center">
                                    <h5 className="border-bottom pb-2 mx-auto w-75">Some Pictures from Our Shows</h5>
                                    <Carousel images={images}/>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        );
    }
}

export default HomePage;
