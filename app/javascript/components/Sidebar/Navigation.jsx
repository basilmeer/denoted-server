import React from 'react';

const Navigation = () => (
  <>
    <h5 className='mb-4 uppercase tracking-wide font-bold text-lg lg:text-sm tracking-widest'>
      Denoted
    </h5>
    <h5 className='mb-4 text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs opacity-75'>
      Navigation
    </h5>
    <div className='sidebar-navigation'>
      <a
        href='#'>
        <i className='fas fa-book'></i>
        <span className='ml-3 mr-auto'>All Notes</span>
        <span className='count'>0</span>
      </a>
      <a
        href='#'>
        <i className='far fa-star'></i>
        <span className='ml-3 mr-auto'>Starred</span>
        <span className='count'>0</span>
      </a>
      <a
        href='#'>
        <i className='fas fa-trash'></i>
        <span className='ml-3 mr-auto'>Trash</span>
        <span className='count'>0</span>
      </a>
    </div>
  </>
);

export default Navigation;