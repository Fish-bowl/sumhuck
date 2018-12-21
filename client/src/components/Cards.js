import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  Card,
  Image,
  Segment,
  Header,
} from 'semantic-ui-react'
import flyingHoffPNG from '../images/flyingHoff.png'
import isthisPNG from '../images/isthis.png'


class Cards extends React.Component {
  
  state = {
    images: [
      {
      location: 'Japan',
      desc: 'sakura trees brah',
      src: isthisPNG,
      id: 1,
      },
      {
        location: 'the sky',
        desc: 'the hoff man',
        src: flyingHoffPNG,
        id: 2
      },
    ], 
  }

  makeCards = (state) => {
    return this.state.images.map((image => {
      return (
        <Card key={image.id}>
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

const mapStateToProps = (state) => {
  return { images: state.images}
}

export default connect(mapStateToProps)(Cards)
