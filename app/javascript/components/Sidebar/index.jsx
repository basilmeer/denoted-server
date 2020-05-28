import React from 'react';
import Navigation from './Navigation';
import Categories from './Categories';

const Sidebar = () => (
  <div className='sidebar max-w-md flex flex-col p-5 bg-gray-100 border-r border-gray-300'>
    <Navigation />
    <Categories />
  </div>
);

export default Sidebar;
