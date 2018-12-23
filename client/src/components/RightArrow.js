import React from 'react';
import {
  Icon,
  Button,
} from 'semantic-ui-react'

const RightArrow = (props) => {
  return (
    <Button
      // style={styles.right} 
      icon='angle double right'
      onClick={props.goToNextSlide}
      // style={{height: '100%', width: '55px'}}
    />
  );
}

// const styles = {
//   right: {
//     position: 'absolute',
//     top: '50%',
//     left: '590px'
//   },
// }

export default RightArrow;
