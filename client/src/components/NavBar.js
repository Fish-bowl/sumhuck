import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  render() {
    return (
        <Menu inverted pointing secondary style={styles.menu} >
          <Menu.Item name='Home' as={Link} to='/' />
          <Menu.Item name='Gallery' as={Link} to='/gallery' />
        </Menu>
    );
  }
}

const styles = { 
  menu: {
    position: 'sticky',
    top: '5px',
    backgroundColor: '#373737',
    minHeight: '100%',
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
