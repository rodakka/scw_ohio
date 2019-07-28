import React from 'react';
import { MDBJumbotron, MDBCardImage } from 'mdbreact';



const Jumbotron = (props) => {
    const image = props.image;
    return(
        <MDBJumbotron className="text-center p-0 my-5">
            <MDBCardImage src={image} alt="Coming Soon" className="img-fluid m-0 w-100" />
        </MDBJumbotron>
    );
}

export default Jumbotron;
