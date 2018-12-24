import React from 'react'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import {
  Segment,
  Header,
  Button,
} from 'semantic-ui-react'
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });


class Carousel extends React.Component {
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
    currentIndex: 0,
    playing: false
  }

  getImages = () => {
    const { publicId, currentIndex } = this.state
    return (
      publicId.map((pubId, i) => {
        if (currentIndex === i)
          return (
            <Image style={styles.image} key={i} publicId={pubId} cloud_name='defmethod' >
              {/* <Transformation
                height='800px'
                width='auto'
                crop="scale"
                radius="20"
                
              /> */}
            </Image>
          )
      }))
  }

  goToPrevSlide = () => {
    const { publicId } = this.state
    const last_element = publicId.length - 1
    if (this.state.currentIndex === 0) {
      return (this.setState({
        currentIndex: last_element
      }))
    }
    else (this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    })))
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.publicId.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }))
  }

  // player = () => {
  //   const { playing, currentIndex} = this.state
    // do {
    //   setInterval(() => {
    //     this.setState({currentIndex: currentIndex +1})
    //   }, 1000)
    // }
    // while (playing === true && currentIndex < 43)
    // while (playing === true && currentIndex < 43) {
    //   return(
    //     setInterval(() => (
    //       this.setState({currentIndex: currentIndex +1})
    //     ), 1000)
    //   )
    // }
    // if (playing === true) {
      
    //     setInterval(() => {
    //       // debugger
    //       return(
    //         this.setState({currentIndex: currentIndex +1})
    //       )
    //     }, 1000)
    // } else {
    //   return(
    //     currentIndex
    //   )
    // }
    // while (playing === true) {
    //   setInterval(function () {
    //       this.setState({ currentIndex: currentIndex++ })
    //       debugger
    //     }, 1000)
    // }
  // }


  // handleClick = () => {
  //   this.setState({playing: !this.state.playing})
  //   player()
  // }


  // componentWillUnmount(
  //   clearInterval(this.interval)
  // )

  render() {
    const {playing} = this.state
    return (
      <Segment inverted style={styles.container} >
        <CloudinaryContext style={styles.cloudBox} cloudName="defmethod">
          {/* <Image publicId="better_vw.jpg" >
            <Transformation height="150" width="150" crop="fill" radius="20" />
          </Image> */}
          {this.getImages()}
        </CloudinaryContext>
        {/* <Button icon='play' active={playing} onClick={() => player()}  /> */}
        <Segment style={styles.buttons} basic >
          <LeftArrow goToPrevSlide={this.goToPrevSlide} />
          <RightArrow goToNextSlide={this.goToNextSlide} />
        </Segment>
      </Segment>
    )
  }
}
// {/* <Image publicId="better_vw.jpg" >
//   <Transformation height="150" width="150" crop="fill" radius="20" />
// </Image> */}

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#373737'
  },
  image: {
    height: '80vh',
    width: 'auto',

  },
  cloudBox: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '5%'
    
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    bottom: '30%',
    marginLeft: '30px',
    marginRight: '30px'
  },
}


export default Carousel
