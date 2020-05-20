import React from 'react';
import { removeSession } from '../utils/session';

const Homepage = () => {
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <div>
      <h1>I'm the homepage</h1>
      <button
        onClick={(e) => {
          e.preventDefault();

          removeSession();
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Homepage;
