import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCurrentUser } from '../api';

export default ({ children, component: Component, ...rest }) => {
  const { user, loading } = useCurrentUser();

  if (loading) return 'loading...';
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children || <Component />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};
