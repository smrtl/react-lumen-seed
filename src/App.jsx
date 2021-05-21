import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  color: #333;
`;

export default ({ title = "Hello World!" }) =>
  <Title>{title}</Title>;
