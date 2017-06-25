import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../reducer/user';

import { Layout, Drawer, Header, Navigation } from 'react-mdl';

// Component //

const Main = props => {

  const { children, handleClick, loggedIn } = props;

  return (
    <div>
    <div style={{height: '300px', position: 'relative'}}>
      <Layout fixedHeader className="is-casting-shadow portfolio-header">
        <Header transparent className="portfolio-navigation-row" title="Photographer" style={{color: 'white'}}>
        </Header>

        <Drawer title="Photographer">
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/search">Other Users</Link>
                { loggedIn
                  ? <a href="#" onClick={handleClick}>Logout</a>
                  : null
                }
            </Navigation>
        </Drawer>

      </Layout>
      </div>
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

// Container //

const mapState = ({ user }) => ({
  loggedIn: !!user.id
});

const mapDispatch = dispatch => ({
  handleClick () {
    dispatch(logout());
  }
});

export default connect(mapState, mapDispatch)(Main);
