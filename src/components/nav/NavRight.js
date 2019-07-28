import React, { Component } from 'react';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

class NavRight extends Component {
    render() {
        return (
            <MDBNav>
                <MDBNavItem>
                    <MDBNavLink to="/shows">Shows</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/gallery">Gallery</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/store">Store</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/contact">Contact Us</MDBNavLink>
                </MDBNavItem>
            </MDBNav>
        );
    }
}

export default NavRight;
