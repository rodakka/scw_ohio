import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from 'mdbreact';

import '../css/contact.css';

class ContactForm extends Component {
  render(){
    return (
        <div className="container text-danger mx-auto">
                <form className="w-50 p-3 mx-auto">
                    <h2 className="mx-auto text-center">Contact Us</h2>
                    <div className="red-text">
                        <MDBInput
                          label="Your name"
                          icon="user"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          label="Your email"
                          icon="envelope"
                          group
                          type="email"
                          validate
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          label="Subject"
                          icon="tag"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          type="textarea"
                          rows="2"
                          label="Your message"
                          icon="pencil-alt"
                        />
                    </div>
                    <div className="text-center">
                        <MDBBtn outline color="red darken-2">
                            Send <MDBIcon far icon="paper-plane" className="ml-1" />
                        </MDBBtn>
                    </div>
                </form>
        </div>
    )
  }
}

export default ContactForm;
