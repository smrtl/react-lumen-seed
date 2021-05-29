import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const GlobalStore = ({ initialState = {}, children }) => {
  const [state, setState] = useState(initialState); // useReducer(Reducer, initialState);
  return <Context.Provider value={[state, setState]}>{children}</Context.Provider>;
};

export const useGlobalStore = (key, initialValue) => {
  const [state, setState] = useContext(Context);
  const setKey = (value) => setState({ ...state, [key]: value });
  const value = state[key];
  return [value === undefined ? initialValue : value, setKey];
};
