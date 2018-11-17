import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu inverted pointing secondary style={styles.menu}>
          <Menu.Item name='Home' as={Link} to='/' />
          <Menu.Item name='Gallery' as={Link} to='/gallery' />
          <Menu.Item name='Add Photos' as={Link} to='/add_photos' />
          {this.rightNavs()}
        </Menu>
      </div>
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
