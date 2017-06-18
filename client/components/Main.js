import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../reducer/user';
import AppHeader from './Header'
import Login from './Login'
import { Layout, Drawer, Header, Navigation, HeaderRow } from 'react-mdl';
// Component //

const Main = props => {

  const { children, handleClick, loggedIn } = props;

  return (
    <div>
    <div style={{height: '300px', position: 'relative'}}>
      <Layout fixedHeader className="is-casting-shadow" style={{background: 'url(nav_background.jpg) center / cover'}}>
        <Header transparent className="portfolio-navigation-row" title="Photographer" style={{color: 'white'}}>
        </Header>

        <Drawer title="Photographer">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
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
// <script>mdc.autoInit()</script>
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



// <div>
//       <h1>BOILERMAKER</h1>
//       { loggedIn ?
//           <nav>
//             <Link to="/home">Home</Link>
//             <a href="#" onClick={handleClick}>Logout</a>
//           </nav> :
//           <nav>
//             <Link to="/login">Login</Link>
//             <Link to="/signup">Sign Up</Link>
//           </nav>
//       }
//       <hr />
//       { children }
//     </div>
