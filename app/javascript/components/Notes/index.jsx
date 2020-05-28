import React from 'react';

const Notes = () => (
  <div className='notes max-w-md flex flex-col bg-gray-100 border-solid border-r border-gray-300'>
    <div className='p-4 border-b border-gray-300'>
      <div className='pt-1'>
        <h5 className='text-gray-500 uppercase tracking-wide text-sm lg:text-xs'>
          <input className="bg-transparent appearance-none w-full py-2 text-gray-700 text-sm lg:text-xs leading-tight focus:outline-none" id="search" type="text" placeholder="Search..." />
        </h5>
      </div>
    </div>
    <div className='notes-list'>
      <a href='#' className='note flex text-sm'>
        Getting good at video games
        <div className='tags mt-2'>
          <span className='tag'>video-games</span>
        </div>
      </a>
      <a href='#' className='note flex text-sm'>
        What is love?
        <div className='tags mt-2'>
          <span className='tag'>music</span>
        </div>
      </a>
      <a href='#' className='note flex text-sm active'>
        Snippet note example
        <div className='tags mt-2'>
          <span className='tag'>help</span>
          <span className='tag'>starting</span>
        </div>
      </a>
      <a href='#' className='note flex text-sm'>
        Welcome to Denoted!
        <div className='tags mt-2'>
          <span className='tag'>help</span>
          <span className='tag'>starting</span>
        </div>
      </a>
    </div>
  </div>
);

export default Notes;
