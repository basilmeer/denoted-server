import React from 'react';
import { render } from 'react-dom';

import Container from '../components/Container';

const App = () => (
  <Container />
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.querySelector('#root'),
  );
});
