import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';



const UserHomeContainer = props => {

  const { children, handleClick, loggedIn } = props;

  return (
    <div className="mdl-layout mdl-js-layout">
      <main className="mdl-layout__content">
        <div className="mdl-grid portfolio-max-width">
          <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
              <div className="mdl-card__media">
                  <img className="article-image" src=" images/example-work01.jpg" border="0" alt="" />
              </div>
              <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text">Blog template</h2>
              </div>
              <div className="mdl-card__supporting-text">
                  Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                  <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
              </div>
          </div>
          <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
              <div className="mdl-card__media">
                  <img className="article-image" src=" images/example-work07.jpg" border="0" alt="" />
              </div>
              <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text">Sunt nulla</h2>
              </div>
              <div className="mdl-card__supporting-text">
                  Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                  <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
              </div>
          </div>
          <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
              <div className="mdl-card__media">
                  <img className="article-image" src=" images/example-work02.jpg" border="0" alt="" />
              </div>
              <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text">Android.com website</h2>
              </div>
              <div className="mdl-card__supporting-text">
                  Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                  <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default UserHomeContainer;
