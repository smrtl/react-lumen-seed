import { base } from '@theme-ui/presets';
import { merge } from 'theme-ui';

export default merge(base, {
  colors: {
    header: '#20272f',
    footer: '#20272f',
    error: '#f00000',
    errorBackground: '#ffdbdb',
  },
  //
  label: {
    fontSize: 1,
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'gray',
    outline: 'none',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
    },
  },
  // Variants
  layout: {
    header: {
      backgroundColor: 'header',
      color: 'background',
      p: '0.8em',
      pb: '1.2em',
    },
    content: {
      p: '0.8em',
    },
    footer: {
      backgroundColor: 'header',
      color: 'background',
      fontSize: '0.8em',
      p: '0.8em',
    },
  },
  text: {},
  forms: {
    error: {
      borderColor: 'red',
      outline: 'none',
    },
  },
  alerts: {
    error: {
      color: 'error',
      bg: 'errorBackground',
      fontWeight: 'normal',
    },
  },
});
