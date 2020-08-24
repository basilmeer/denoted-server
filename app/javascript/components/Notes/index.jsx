import React, { useEffect } from 'react';
import axios from 'axios';

const Notes = ({ notes, setNotes, showNote, activeNoteId, isSaving, cleanInputFields }) => {
  useEffect(() => {
    axios.get('/notes')
      .then((res) => {
        setNotes(res.data.notes);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [isSaving]);

  return (
    <div className='notes max-w-md flex flex-col bg-gray-100 border-solid border-r border-gray-300'>
      <div className='p-4 border-b border-gray-300'>
        <div className='pt-1'>
          <h5 className='text-gray-500 uppercase tracking-wide text-sm lg:text-xs'>
            <input className='bg-transparent appearance-none w-full py-2 text-gray-700 text-sm lg:text-xs leading-tight focus:outline-none' id='search' type='text' placeholder='Search...' />
          </h5>
        </div>
      </div>
      <div className='notes-list'>
        {notes &&
          notes.map((n) => (
            <a href='#' className={`note flex text-sm ${activeNoteId === n.id && 'active'}`} key={n.id} onClick={(e) => showNote(e, n.id)}>
              {n.title}
              <div className='tags mt-2'>
                {n.tags &&
                  n.tags.map((t) => (
                    <span className='tag' key={t.id}>{t.text}</span>
                  ))
                }
              </div>
            </a>
          ))
        }
      </div>
      <button className='new-note-btn' onClick={cleanInputFields}>
        <i className='fas fa-plus mr-1'></i>
        New Note
      </button>
    </div>
  )
};

export default Notes;
