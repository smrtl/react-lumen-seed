import React from 'react';

import { Alert, Box, Field as BaseField } from 'theme-ui';

export default ({ error, innerProps, ...props }) => (
  <Box mb={3}>
    <BaseField variant={error ? 'error' : 'input'} {...props} {...innerProps} />
    {error && (
      <Alert variant="error" mt={1}>
        {error.message}
      </Alert>
    )}
  </Box>
);
