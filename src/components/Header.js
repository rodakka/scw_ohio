import React, { Component } from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

import NavLeft from './nav/NavLeft';
import NavRight from './nav/NavRight';

import logo from '../img/logo.png';

import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <MDBContainer fluid className="mx-auto mt-4 header white-text text-center">
                <MDBRow>
                    <MDBCol md="5" className="d-flex align-items-center justify-content-end">
                        <NavLeft />
                    </MDBCol>
                    <MDBCol md="2">
                        <img className="w-100" src={logo} alt="SCW Ohio" />
                    </MDBCol>
                    <MDBCol md="5" className="d-flex align-items-center justify-content-start">
                        <NavRight />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Header;
