// import React from 'react'
// import Siema from 'siema';
// import {
//   Segment,
//   Icon,
//   Button
// } from 'semantic-ui-react'
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
// import cloudinary from 'cloudinary-core';
// const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });

// class SlideShow extends React.Component {

//   state = {
//     slideImages: [
//       'sumhuck/IMG_3420',
//       'sumhuck/IMG_3416',
//       'sumhuck/IMG_3409',
//       'sumhuck/IMG_3391',
//       'sumhuck/IMG_3389',
//       'sumhuck/IMG_3274',
//       'sumhuck/IMG_3265',
//       'sumhuck/IMG_3279',
//       'sumhuck/IMG_3259',
//       'sumhuck/IMG_3246',
//       'sumhuck/IMG_3262',
//     ]
//   }

//   prev = () => {
//     this.siema.prev()
//   };

//   next = () => {
//     this.siema.next()
//   };

//   getImages = () => {
//     const { slideImages } = this.state
//     return (
//       slideImages.map((pubId, i) => {
//         return (
//           <div style={styles.body} >
//             <Image style={styles.img} key={i} publicId={pubId} cloud_name='defmethod' >
//               <Transformation
//                 height="100%"
//                 width="100%"
//                 crop="fit"
//               />
//             </Image>
//           </div>
//         )
//       }))
//   }

//   render(){
//     return(
//       <Segment>
//         <div className="siema" style={styles.siema}>
//           {this.getImages()}
//           {/* <Icon as='button' name='backward' onClick={this.prev()} />
//           <Icon as='button' name='forward' onClick={this.next()} /> */}
//           <Button as='icon' name='backward' onClick={this.prev()} />
//           <Button as='icon' name='forward' onClick={this.next()} />
//         </div>
//       </Segment>
//     )
//   }
// }

// const styles = {
//   image: {
//     height: '100%',
//     width: 'auto'
//   }
// }

// export default SlideShow
// import React from 'react'
// import ReactSiema from 'react-siema'
// import IsThis from '../images/isthis.png'
// import {
//   Segment,
//   Icon,
//   Button
// } from 'semantic-ui-react'
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
// import cloudinary from 'cloudinary-core';
// const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });
// // const Slide = () => <img src={IsThis} alt='slide' />

// class SlideShow extends React.Component {
  
  // state = {
  //   slideImages: [
  //     'sumhuck/IMG_3420',
  //     'sumhuck/IMG_3416',
  //     'sumhuck/IMG_3409',
  //     'sumhuck/IMG_3391',
  //     'sumhuck/IMG_3389',
  //     'sumhuck/IMG_3274',
  //     'sumhuck/IMG_3265',
  //     'sumhuck/IMG_3279',
  //     'sumhuck/IMG_3259',
  //     'sumhuck/IMG_3246',
  //     'sumhuck/IMG_3262',
  //   ]
  // }

//   getImages = () => {
//     const { slideImages } = this.state
//     return (
//       slideImages.map((pubId, i) => {
//         return (
//           <div>
//             <Slide>
//               <Image key={i} publicId={pubId} cloud_name='defmethod' >
//               </Image>
//               {/* <Transformation
//                 height="100%"
//                 width="100%"
//                 crop="fit"
//               /> */}
//             </Slide>
//           </div>
//         )
//       }))
//   }

//   render() {
//     let slider
//     return(
//       <ReactSiema>
//         {this.getImages()}
//         <button onClick={() => slider.prev()}>prev</button>
//         <button onClick={() => slider.next()}>next</button>
//       </ReactSiema>
//     )
//   }
// }

// export default SlideShow
import React from "react";
import Slider from "react-slick";

class SlideShow extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default SlideShow
