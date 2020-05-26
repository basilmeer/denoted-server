import React from 'react';
import { render } from 'react-dom';

import Sidebar from '../components/Sidebar';
import Search from '../components/Search';

import '../stylesheets/main.scss';

function App() {
  return (
    <div className='App flex h-screen'>
      <Sidebar />
      <Search />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('root'),
  );
})
