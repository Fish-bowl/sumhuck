import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Gallery from './Gallery'
import AddPhotos from './AddPhotos'
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';

const styles = {
  global: {
    backgroundColor: '#8e8e8e',
    minHeight: '100vh',

  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.global} >
        <Flash />
        <NavBar />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <ProtectedRoute exact path='/gallery' component={Gallery} />
            <ProtectedRoute exact path='/add_photos' component={AddPhotos} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
