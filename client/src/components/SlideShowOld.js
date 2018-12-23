import React from 'react'
import Siema from 'siema';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });

class SlideShow extends React.Component {

  state = {
    slideImages: [
      'sumhuck/IMG_3420',
      'sumhuck/IMG_3416',
      'sumhuck/IMG_3409',
      'sumhuck/IMG_3391',
      'sumhuck/IMG_3389',
      'sumhuck/IMG_3274',
      'sumhuck/IMG_3265',
      'sumhuck/IMG_3279',
      'sumhuck/IMG_3259',
      'sumhuck/IMG_3246',
      'sumhuck/IMG_3262',
    ]
  }

  prev = () => {
    this.siema.prev()
  };

  next = () => {
    this.siema.next()
  };

  getImages = () => {
    const { slideImages } = this.state
    return (
      slideImages.map((pubId, i) => {
        return (
          <div style={styles.body} >
            <Image style={styles.img} key={i} publicId={pubId} cloud_name='defmethod' >
              <Transformation
                height="1000"
                width="1000"
                crop="fit"
              />
            </Image>
          </div>
        )
      }))
  }

  render() {
    return (
      <div style={{width: '25%'}} >
        <div className="siema" style={styles.siema} >
          {this.getImages()}
          {/* <div><img src="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" style={styles.img} /></div>
          <div><img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image"style={styles.img}  /></div>
          <div><img src="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" style={styles.img} /></div>
          <div><img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" style={styles.img} /></div> */}
        </div>
        <button onClick={this.prev}>Prev</button>
        <button onClick={this.next}>Next</button>
      </div>
    );
  }

  componentDidMount() {
    this.siema = new Siema();
  }
}

const styles = {
  body: {
    width: '100%',
    maxWidth: '30rem',
    margin: '0 auto'
  },

  img: {
    width: '100%'
  },

  siema: {
    margin: '1rem 0'
  },

}

export default SlideShow
