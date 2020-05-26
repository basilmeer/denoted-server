import React from 'react';

const Navigation = () => (
  <>
    <h5 className='mb-4 text-gray-700 uppercase tracking-wide font-bold text-sm lg:text-xs'>
      Navigation
    </h5>
    <div className='sidebar-navigation'>
      <a
        href='#'
        className='flex items-center py-1 hover:text-white font-medium text-gray-600'>
        <i className='fas fa-book'></i>
        <span className='ml-3 mr-auto'>All Notes</span>
        <span className='count'>0</span>
      </a>
      <a
        href='#'
        className='flex items-center py-1 hover:text-white font-medium text-gray-600'>
        <i className='far fa-star'></i>
        <span className='ml-3 mr-auto'>Starred</span>
        <span className='count'>0</span>
      </a>
      <a
        href='#'
        className='flex items-center py-1 hover:text-white font-medium text-gray-600'>
        <i className='fas fa-trash'></i>
        <span className='ml-3 mr-auto'>Trash</span>
        <span className='count'>0</span>
      </a>
    </div>
  </>
);

export default Navigation;
