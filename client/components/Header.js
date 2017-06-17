import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
var componentHandler = require('material-design-lite/material');

// console.log('COMPONENT HANDLER!!!',componentHandler)

// Component //

class Header extends React.Component {
    constructor(props){
        super(props)
    }

// componentDidUpdate() {
//     // This upgrades all upgradable components (i.e. with 'mdl-js-*' class)
//     console.log('COMPONENT DID UPDATE',componentHandler)
//     componentHandler.upgradeDom();
// }

render(){
  return (
    <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header' data-upgraded=',MaterialLayout'>
      <header className='mdl-layout__header mdl-layout__header--waterfall portfolio-header mdl-layout--large-screen-only'>
          <div className='mdl-layout__header-row portfolio-logo-row'>
          </div>
          <div className='mdl-layout__header-row portfolio-navigation-row'>
            <a className='mdl-navigation__link  mdl-layout-title' href='index.html'>Photographer</a>
              <div className='mdl-layout-spacer'></div>
              <nav className='mdl-navigation mdl-typography--body-1-force-preferred-font'>

                  <a className='mdl-navigation__link is-active' href='blog.html'>Blog</a>
                  <a className='mdl-navigation__link'>About</a>
                  <a className='mdl-navigation__link' href='contact.html'>Contact</a>
              </nav>
          </div>

      </header>
      <header className='mdl-layout__header mdl-layout__header--waterfall portfolio-header mdl-layout--small-screen-only'>
        <div className='mdl-layout__header-row portfolio-navigation-row '>
          <a className='mdl-navigation__link  mdl-layout-title mdl-layout-title-small' href='index.html'>Photographer</a>
        </div>
      </header>
      <div className='mdl-layout__drawer mdl-layout--small-screen-only' aria-hidden='true'>

          <nav className='mdl-navigation mdl-typography--body-1-force-preferred-font'>
              <a className='mdl-navigation__link is-active' href='index.html'>Portfolio</a>
              <a className='mdl-navigation__link' href='blog.html'>Blog</a>
              <a className='mdl-navigation__link' href='about.html'>About</a>
              <a className='mdl-navigation__link' href='contact.html'>Contact</a>
          </nav>
      </div>
    </div>
  )}
}

//export default Header;

// Container //

const mapState = () => ({

});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(Header);
