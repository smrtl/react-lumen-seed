import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ThemeLink } from 'theme-ui';

export default (props) => <ThemeLink as={RouterLink} {...props} />;
