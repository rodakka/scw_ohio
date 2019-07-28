import React, { Component } from 'react';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

class NavLeft extends Component {
    render() {
        return (
            <MDBNav>
                <MDBNavItem>
                    <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/hof">Hall of Fame</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/news">News</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/roster">Roster</MDBNavLink>
                </MDBNavItem>
            </MDBNav>
        );
    }
}

export default NavLeft;
