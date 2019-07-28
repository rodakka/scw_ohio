import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from 'mdbreact';

function Carousel(props){
    const images = props.images;
    return(
        <MDBContainer>

            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1 m-3"
            >
                <MDBCarouselInner>
                    {images.map(image => (
                        <MDBCarouselItem itemId={image.id} key={image.id}>
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src={image.image}
                                    alt={image.alt}
                                />
                            </MDBView>
                        </MDBCarouselItem>
                    ))}
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    )
}

export default Carousel;
