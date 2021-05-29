import React, { useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Box, Button, Checkbox } from 'theme-ui';

import { useLogin } from '../api';
import Page from '../components/Page';
import Field from '../components/Field';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  remember: yup.bool(),
});

export default () => {
  const { state } = useLocation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [{ token, error }, login] = useLogin();
  console.log(token);

  useEffect(() => {
    if (error) {
      setError('password', { type: 'manual', message: 'Invalid username or password' });
    }
  }, [error]);

  return token ? (
    <Redirect to={state?.from || '/'} />
  ) : (
    <Page title="Login">
      <Box as="form" sx={{ width: '22em', m: 'auto' }} onSubmit={handleSubmit(login)}>
        <Field label="E-Mail" error={errors?.email} innerProps={register('email')} />
        <Field
          label="Password"
          type="password"
          error={errors.password}
          innerProps={register('password')}
        />
        <Field
          label="Remember me"
          as={Checkbox}
          defaultChecked
          error={errors.remember}
          innerProps={register('remember')}
        />
        <Button>Login</Button>
      </Box>
    </Page>
  );
};
