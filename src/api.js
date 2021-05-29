import { useState } from 'react';
import useBaseAxios, { configure } from 'axios-hooks';
import Axios from 'axios';

import { useGlobalStore } from './store/global';

const axios = Axios.create({
  baseURL: '/api',
});
configure({ axios });

const useToken = () => {
  const [token, storeToken] = useGlobalStore('token', localStorage.getItem('token') || null);
  const setToken = (value, persist = true) => {
    storeToken(value || null);
    if (persist && value) localStorage.setItem('token', value);
    else localStorage.removeItem('token');
  };
  return [token, setToken];
};

export const useLogin = () => {
  const [, setToken] = useToken();
  const [result, setResult] = useState({});

  const login = ({ email, password, remember = true }) =>
    axios
      .post('login', { email, password })
      .then(({ data }) => {
        setResult({ token: data.token });
        setToken(data.token, remember);
      })
      .catch((e) => setResult({ error: e.message }));

  return [result, login];
};

const useAxios = (config, options) => {
  const [token] = useToken();
  const conf = typeof config === 'string' ? { url: config } : config;
  conf.headers = conf.headers || {};
  conf.headers.authorization = `Bearer ${token}`;
  return useBaseAxios(conf, options);
};

export const useCurrentUser = () => {
  const [{ data, loading, error }] = useAxios('/');
  return { user: data ? data.user : null, loading, error };
};
