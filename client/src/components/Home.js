import React, { Component } from 'react';
import Cards from './Cards'
import Carousel from './Carousel'
import Homage from './Homage'
// import SlideShow from './SlideShow'
import {
  Header,
  Container,
  Divider,
  Segment,
  Card,
  Grid,
} from 'semantic-ui-react';

class Home extends React.Component {
  render(){
    return(

      <Grid>
        <Grid.Row columns={1} >
          <Grid.Column stretched width={16} style={styles.column} >
            <Header
              as='h1'
              color='black'
              style={styles.header}
            >
              SumHuck
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column width={16}>
            <Carousel />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column width={16}>
            <Homage />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const styles = {
  container: {
    height: '100vh', 
    marginTop: '40px'
  },
  grid: {
    height: '100vh' ,
  },
  header: {
    textAlign: 'center',
    paddingTop: '20px',
  }
}

// class Home extends Component {
//   render() {
//     return (
//       <div style={styles.container} >
//         <Container>
//           <Grid centered >
//             <SlideShow />
            // <Grid.Row columns={1} >
            //   <Grid.Column stretched width={16} style={styles.column} >
            //     <Header 
            //       as='h1' 
            //       color='black' 
            //       style={styles.header} 
            //     >
            //       SumHuck
            //     </Header>
            //   <Divider />
            //   </Grid.Column>
            // </Grid.Row>
//             <Grid.Row columns={4}>
//               <Cards />
//             </Grid.Row>
//           </Grid>
//         </Container>
//       </div>
//     );
//   }
// }

export default Home;
