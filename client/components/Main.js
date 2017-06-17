import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../reducer/user';
import Header from './Header'
import Login from './Login'

// Component //

const Main = props => {

  const { children, handleClick, loggedIn } = props;

  return (
    <div>
      <Header />
      { children }

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
