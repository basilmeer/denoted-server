import React from 'react';

const Categories = () => (
  <div className='categories mt-8'>
    <h5 className='mb-4 text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs flex opacity-75'>
      Categories
      <a href="#" className="ml-auto hover:text-gray-700 transition duration-200 ease-in-out">
        <i className="fas fa-plus"></i>
      </a>
    </h5>
    <div className='sidebar-navigation'>
      <a
        href='#'
        className='sidebar-item'>
        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        <span className='ml-3 mr-auto'>Default</span>
        <span className='count'>12</span>
      </a>

      <a
        href='#'
        className='sidebar-item'>
        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
        <span className='ml-3 mr-auto'>Notes</span>
        <span className='count'>10</span>
      </a>

      <a
        href='#'
        className='sidebar-item'>
        <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
        <span className='ml-3 mr-auto'>Todos</span>
        <span className='count'>4</span>
      </a>

      <a
        href='#'
        className='sidebar-item'>
        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
        <span className='ml-3 mr-auto'>Ideas</span>
        <span className='count'>24</span>
      </a>
    </div>
  </div>
);

export default Categories;
