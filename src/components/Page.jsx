/** @jsxImportSource theme-ui */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Heading } from 'theme-ui';

import { useCurrentUser } from '../api';
import Link from './Link';

export default ({ title, children }) => {
  const location = useLocation();
  const { user } = useCurrentUser();

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        fontFamily: 'body',
      }}
    >
      <header
        sx={{
          width: '100%',
          display: 'flex',
          variant: 'layout.header',
        }}
      >
        {location.pathname !== '/' ? (
          <Heading>
            <Link to="/">Home</Link>
            &nbsp;/&nbsp;
          </Heading>
        ) : null}
        <Heading>{title}</Heading>
        <div sx={{ flex: 2 }} />
        <div sx={{ alignSelf: 'center' }}>{user ? `Hello ${user.first_name}` : null}</div>
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          padding: '1em',
          variant: 'layout.content',
        }}
      >
        {children}
      </main>
      <footer
        sx={{
          width: '100%',
          display: 'flex',
          variant: 'layout.footer',
        }}
      >
        Footer
      </footer>
    </div>
  );
};
