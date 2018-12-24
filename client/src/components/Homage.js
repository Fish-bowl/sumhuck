import React from 'react'
import {
  Segment,
  Header,
} from 'semantic-ui-react'

class Homage extends React.Component{
  render() {
    return(
      <Segment textAlign='center' basic style={styles.continer} >
        <p>
          This is a webpage dedicated to the great "team adventure dirt bike" and all it's glory.
        </p>
        <p>
          Riding from March to May...
        </p>
        <p>
          Rainer, I am so Greatfull to you for being such a major influence in my life, even more so the more I know you. Your knowledge and wisdom are an endless treasure trove of wonders to me, and your charachter is that of pure gold. You are the perfect man to admire, and an even better one to emulate. You do so much for me, spoken and unspoken and i'm thankfull from the very bottom of my heart.
        </p>
        <p>
          - Merry Christmas and A Happy New Year - Max Whitaker
        </p>
        
      </Segment> 
    )
  }
}

const styles = {
  container: {
    backgroundColor: '#373737',
    height: '200px',

  }
}


export default Homage
