import React from 'react';

import Link from '../components/Link';
import Page from '../components/Page';

export default () => (
  <Page title="Home page">
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link to="/profile">My profile</Link>
      </li>
      <li>
        <Link to="/users">All users</Link>
      </li>
    </ul>
  </Page>
);
