import React from 'react'
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import {
  Container,
  Segment,
  Header,
} from 'semantic-ui-react'

class Gallery extends React.Component {
  state = { gallery: [], }

  render() {
    return (
      <Container>
        this is gallery
      {/* <CloudinaryContext cloudName="defmethod">
          <Image publicId="better_vw.jpg" >
            <Transformation height="150" width="150" crop="fill" radius="20" />
          </Image>
          <Image publicId="gallery_images/dolph_vw.jpg" >
            <Transformation height="150" width="150" crop="fill" radius="20" />
          </Image>
        </CloudinaryContext> */}
      </Container>
    )
  }
}

export default Gallery
