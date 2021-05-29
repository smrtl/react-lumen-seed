import React from 'react';
import { Box, Text, Heading, Avatar, Badge } from 'theme-ui';
import { useCurrentUser } from '../api';

import Page from '../components/Page';

export default () => {
  const { user } = useCurrentUser();
  return (
    <Page title="Profile page">
      <Box sx={{ display: 'flex' }}>
        <Avatar src="https://raw.githubusercontent.com/system-ui/theme-ui/stable/packages/docs/static/icon.png" />
        <Box ml={2}>
          <Heading>
            {user.first_name} {user.last_name}
          </Heading>
          <Badge>{user.is_admin ? 'admin' : 'user'}</Badge>
          <Text ml={2}>{user.email}</Text>
        </Box>
      </Box>
    </Page>
  );
};
