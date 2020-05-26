import React from 'react';
import Navigation from './Navigation';
import Categories from './Categories';

const Sidebar = () => (
  <div className='sidebar text-white max-w-md flex flex-col p-5 bg-gray-900'>
    <Navigation />
    <Categories />
  </div>
);

export default Sidebar;
