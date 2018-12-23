// import React from 'react'
// import {
//   Container,
//   Segment,
//   Header,
// } from 'semantic-ui-react'
// import Slider from 'react-slick'
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
// import cloudinary from 'cloudinary-core';
// const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });

// class Gallery extends React.Component {
//   state = { 
//     publicId: [
//       'sumhuck/IMG_3420',
//       'sumhuck/IMG_3416',
//       'sumhuck/IMG_3409',
//       'sumhuck/IMG_3401',
//       'sumhuck/IMG_3391',
//       'sumhuck/IMG_3389',
//       'sumhuck/IMG_3274',
//       'sumhuck/IMG_3265',
//       'sumhuck/IMG_3279',
//       'sumhuck/IMG_3259',
//       'sumhuck/IMG_3246',
//       'sumhuck/IMG_3262',
//       'sumhuck/IMG_3137',
//       'sumhuck/IMG_3123',
//       'sumhuck/IMG_3087',
//       'sumhuck/IMG_2977',
//       'sumhuck/IMG_2895',
//       'sumhuck/IMG_2876',
//       'sumhuck/IMG_2810',
//       'sumhuck/IMG_2795',
//       'sumhuck/IMG_2793',
//       'sumhuck/IMG_2780',
//       'sumhuck/IMG_2777',
//       'sumhuck/IMG_2705',
//       'sumhuck/IMG_2689',
//       'sumhuck/IMG_2494',
//       'sumhuck/IMG_2477',
//       'sumhuck/IMG_2487',
//       'sumhuck/IMG_2463',
//       'sumhuck/IMG_2444',
//       'sumhuck/IMG_2437',
//       'sumhuck/IMG_2434',
//       'sumhuck/IMG_2427',
//       'sumhuck/IMG_2420',
//       'sumhuck/IMG_2284',
//       'sumhuck/IMG_2417',
//       'sumhuck/IMG_2371',
//       'sumhuck/IMG_2270',
//       'sumhuck/IMG_2277',
//       'sumhuck/IMG_2198',
//       'sumhuck/IMG_2210',
//       'sumhuck/IMG_2163',
//       'sumhuck/IMG_2194',
//       'sumhuck/IMG_2157',
//     ], 
//   }

  // getSlides = () => {
  //   const { publicId } = this.state
  //   return (
  //     publicId.map((pubId, i) => {
  //       return (
  //         <div style={styles.imageContainer} >
  //           <Image key={i} publicId={pubId} cloud_name='defmethod' >
  //             <Transformation
  //               height="600"
  //               width="600"
  //               crop="fit"
  //             />
  //           </Image>
  //         </div>
  //       )
  //     }))
  // }

//   render() {
//     const settings = {
//       rows: 1,
//       slidesPerRow: 3,
//       centerMode: true,
//       draggable: true,
//       centerMode: true,
//       centerPadding: 50,
//       dots: true,
//       arrows: true,
//       infinite: true,
//       autoPlaySpeed: 5000,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <div style={styles.container} >
//         <Slider {...settings}>
//           {this.getSlides()}
//         </Slider>
//       </div>
//     );
//   }
// }

// const styles = {
//   container: {

//   },

//   imageContainer: {
//     width: 'auto',
//     height: '300px',
//   },

//   card: {
//     width: 'auto'
//   },

//   image: {
//     height: '300px',
//     width: '300px',
//   },
// }

// export default Gallery
// import React from 'react'
// import {
//   Container,
//   Segment,
//   Header,
// } from 'semantic-ui-react'
// import Slider from 'react-slick'
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
// import cloudinary from 'cloudinary-core';
// const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });

// class Gallery extends React.Component {
//   render(){
//     return(
//       <Container style={styles.dev.container}>
//         <div style={styles.dev.story} >
//           story board
//         </div>
//         <div style={styles.dev.gallery} >
//           gallery
//         </div>
//         <div style={styles.dev.map} >
//           map?
//         </div>
//       </Container>
//     )
//   }
// }

// const styles = {
//   dev: {
//     container: {
//       border: 'solid 3px red',
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     story: {
//       border: 'solid 3px red',
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     gallery: {
//       border: 'solid 3px red',
//       position: 'absolute',
//       height: '75%',
//       width: 'auto',
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     map: {
//       border: 'solid 3px red',
//       display: 'flex',
//       justifyContent: 'center',
//     },

//   }
// }

// export default Gallery
import React from 'react'
import {
  Container,
  Segment,
  Card,
  Header,
} from 'semantic-ui-react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });


class Gallery extends React.Component{
  state = {
    publicId: [
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
      'sumhuck/IMG_3137',
      'sumhuck/IMG_3123',
      'sumhuck/IMG_3087',
      'sumhuck/IMG_2977',
      'sumhuck/IMG_2895',
      'sumhuck/IMG_2876',
      'sumhuck/IMG_2810',
      'sumhuck/IMG_2795',
      'sumhuck/IMG_2793',
      'sumhuck/IMG_2780',
      'sumhuck/IMG_2777',
      'sumhuck/IMG_2705',
      'sumhuck/IMG_2689',
      'sumhuck/IMG_2494',
      'sumhuck/IMG_2477',
      'sumhuck/IMG_2487',
      'sumhuck/IMG_2463',
      'sumhuck/IMG_2444',
      'sumhuck/IMG_2437',
      'sumhuck/IMG_2434',
      'sumhuck/IMG_2427',
      'sumhuck/IMG_2420',
      'sumhuck/IMG_2284',
      'sumhuck/IMG_2417',
      'sumhuck/IMG_2371',
      'sumhuck/IMG_2270',
      'sumhuck/IMG_2277',
      'sumhuck/IMG_2198',
      'sumhuck/IMG_2210',
      'sumhuck/IMG_2163',
      'sumhuck/IMG_2194',
      'sumhuck/IMG_2157',
    ],
  }

  getImages = () => {
    const { publicId } = this.state
    return (
      publicId.map((pubId, i) => {
        return (
          <Card style={{backgroundColor: '#373737', width: '500px'}}>
              <Card.Content>
                <Image key={i} publicId={pubId} cloud_name='defmethod' >
                  <Transformation
                    height="400"
                    width="400"
                    crop="fit"
                  />
                </Image>
              </Card.Content>
            </Card>
        )
      }))
  }

  render(){
    return(
      <Container style={styles.container} >
        <Card.Group itemsPerRow={2} stackable >
          {this.getImages()}
        </Card.Group>
      </Container>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center' 
  }
}
export default Gallery
