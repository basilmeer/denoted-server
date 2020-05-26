import React from 'react';

const Categories = () => (
  <div className='categories mt-8'>
    <h5 className='mb-4 text-gray-700 uppercase tracking-wide font-bold text-sm lg:text-xs'>
      Categories
    </h5>
    <div className='sidebar-navigation'>
      <a
        href='#'
        className='flex items-center py-1 hover:text-white font-medium text-gray-600'>
        <i className='fas fa-book'></i>
        <span className='ml-3 mr-auto'>Default</span>
        <span className='count'>12</span>
      </a>

      <a
        href='#'
        className='flex items-center py-1 hover:text-white font-medium text-gray-600'>
        <i className='far fa-star'></i>
        <span className='ml-3 mr-auto'>Notes</span>
        <span className='count'>10</span>
      </a>
    </div>
  </div>
);

export default Categories;
