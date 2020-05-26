import React from 'react';
import { render } from 'react-dom';

import Sidebar from '../components/Sidebar';
import Notes from '../components/Notes';

import '../stylesheets/main.scss';

const App = () => {
  return (
    <div className='flex h-screen subpixel-antialiased'>
      <Sidebar />
      <Notes />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('root'),
  );
})
