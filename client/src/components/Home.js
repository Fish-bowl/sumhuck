import React, { Component } from 'react';
import Cards from './Cards'
import {
  Header,
  Container,
  Segment,
  Card,
  Grid,
} from 'semantic-ui-react';

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
  }
}

class Home extends Component {
  render() {
    return (
      <div style={styles.container} >
        <Container>
          <Grid centered >
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
            <Grid.Row columns={4}>
             <Card.Group>
              <Cards />
             </Card.Group>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Home;
