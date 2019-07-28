import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy;  SCW Ohio <br />Website Designed and Developed by: Rodak Designs
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
// import React, { Component } from 'react';
//
// class Footer extends Component {
//     render() {
//         return(
//             <footer className="d-flex text-white py-2 justify-content-center border-top mt-3">
//               <p>
//                 All contents &copy; 2018 SCW Ohio. All rights reserved.
//               </p>
//             </footer>
//         )
//     }
// }
//
// export default Footer;
