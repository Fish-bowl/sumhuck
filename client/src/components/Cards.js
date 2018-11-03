import React from 'react'
import axios from 'axios'
import {
  Card,
  Image,
  Segment,
  Header,
} from 'semantic-ui-react'
import isthisPNG from '../images/isthis.png'
import flyingHoffPNG from '../images/flyingHoff.png'


class Cards extends React.Component {
  
  state = { images: [], }
  
  imageCollection = [
    {
      location: 'Japan',
      desc: 'sakura trees brah',
      src: isthisPNG,
    },
    {
      location: 'the sky',
      desc: 'the hoff man',
      src: flyingHoffPNG
    },
  ]

  componentDidMount(imageCollection) {
    this.setState({images: this.imageCollection})
  }

  makeCards = (imageCollection) => {
    return this.state.images.map((image => {
      return (
        <Card>
          <Image alt={image.desc} src={image.src} />
          <Card.Content>
            <Card.Header>{image.location}</Card.Header>
            <Card.Content>{image.desc}</Card.Content>
          </Card.Content>
        </Card>
      )
    }))
  }

  render() {
    return (
      <Card.Group>
        {this.makeCards()}
      </Card.Group>
    )
  }

  
}


export default Cards
