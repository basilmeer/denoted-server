import React from 'react';
import Navigation from './Navigation';

const Sidebar = () => (
  <div className='sidebar max-w-md flex flex-col p-5 bg-gray-100 border-r border-gray-300'>
    <Navigation />
  </div>
);

export default Sidebar;
