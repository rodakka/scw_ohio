import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
// import "./Lightbox.css";

class LightboxPage extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    'https://scontent.fden3-1.fna.fbcdn.net/v/t1.0-9/65531765_2686663314697143_1701889024492306432_o.jpg?_nc_cat=100&_nc_oc=AQnpV6BxR1PQCTuRiec49k-x6hdSGdh_9w_bng9npHukianffytJyhF3ApP-WZxHlAA&_nc_ht=scontent.fden3-1.fna&oh=2cc40fb66aefb194be300e6b80d3d260&oe=5DE515DD',
    'https://scontent.fden3-1.fna.fbcdn.net/v/t1.0-9/49472108_2391361394227338_2639302075346845696_o.jpg?_nc_cat=109&_nc_oc=AQmoWPNESvCOUqwutt3oxbalyZcW6u04h0DGYlL957VcE2wVI2IkpdpHLSFGqoIBL7s&_nc_ht=scontent.fden3-1.fna&oh=88c7ed0116ffd54ce4b6abd8c3a82c68&oe=5DE519D1',
    'https://scontent.fden3-1.fna.fbcdn.net/v/t1.0-9/60960230_2612932698736872_6323616440234541056_o.jpg?_nc_cat=100&_nc_oc=AQnU8U6qmVcP8S-2ibnmdtUAmpabR6wjcJ6fPy-U3EQ1B7EXzQCGNZ_KQ1KbGzRFcV4&_nc_ht=scontent.fden3-1.fna&oh=71a93e651d169f0173d8e21ef38e9232&oe=5DB46126'
  ]
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

return images.map(imageSrc => {
  photoIndex++;
  const privateKey = photoIndex;
  return (
    <MDBCol md="4" key={photoIndex}>
      <figure>
        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={()=>
        this.setState({ photoIndex: privateKey, isOpen: true })
        }
        />
      </figure>
    </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default LightboxPage;
