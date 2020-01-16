import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle" /> Page Not Found
      </h1>
      <p className="large">Sorry, this page does not exist</p>
      <p className="lead">
        Maybe you were looking for my{' '}
        <Link className="border-bottom" to="/projects">
          Projects
        </Link>{' '}
        or{' '}
        <Link className="border-bottom" to="/about">
          About
        </Link>{' '}
        page?
      </p>
    </div>
  );
};

export default NotFound;
