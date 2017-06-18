import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const AuthForm = props => {

  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="mdl-layout mdl-js-layout">
      <nav>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email"><small>Name</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{ displayName }</button>
        </div>
        { error &&  <div> { error.response.data } </div> }
      </form>
      <a href="/auth/google">{ displayName } with Google</a>
    </div>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
