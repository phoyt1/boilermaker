import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';


// Component //

const Header = props => {

  const { children, handleClick, loggedIn } = props;

  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
          <div className="mdl-layout__header-row portfolio-logo-row">
          </div>
          <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
            <a className="mdl-navigation__link  mdl-layout-title" href="index.html">Photographer</a>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">

                  <a className="mdl-navigation__link is-active" href="blog.html">Blog</a>
                  <a className="mdl-navigation__link" href="about.html">About</a>
                  <a className="mdl-navigation__link" href="contact.html">Contact</a>
              </nav>
          </div>
          <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--small-screen-only">
          <a className="mdl-navigation__link  mdl-layout-title mdl-layout-title-small" href="index.html">Photographer</a>
          </div>
      </header>
      <div className="mdl-layout__drawer mdl-layout--small-screen-only">

          <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
              <a className="mdl-navigation__link is-active" href="index.html">Portfolio</a>
              <a className="mdl-navigation__link" href="blog.html">Blog</a>
              <a className="mdl-navigation__link" href="about.html">About</a>
              <a className="mdl-navigation__link" href="contact.html">Contact</a>
          </nav>
      </div>
    </div>
  );
};

export default Header;

// Container //

// const mapState = ({ user }) => ({
//   loggedIn: !!user.id
// });

// const mapDispatch = dispatch => ({
//   handleClick () {
//     dispatch(logout());
//   }
// });

// export default connect(mapState, mapDispatch)(Main);
