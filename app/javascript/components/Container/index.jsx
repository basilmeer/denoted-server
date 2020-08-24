import React, { useState } from 'react';

import Sidebar from '../Sidebar';
import Notes from '../Notes';
import Editor from '../Editor';

const Container = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const cleanInputFields = () => {
    setTitle('');
    setBody('');
    setTags([]);
    setActiveNoteId(null);
  }

  const showNote = (e, id) => {
    e.preventDefault();
    const note = notes.filter((n) => n.id === id)[0];
    setTitle(note.title);
    setBody(note.body);
    setTags(note.tags);
    setActiveNoteId(note.id);
  }

  return (
    <div className='flex h-screen subpixel-antialiased'>
      <Sidebar />
      <Notes
        notes={notes}
        setNotes={setNotes}
        showNote={showNote}
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
        isSaving={isSaving}
        cleanInputFields={cleanInputFields}
      />
      <Editor
        setTitle={setTitle}
        title={title}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
        body={body}
        setBody={setBody}
        tags={tags}
        setTags={setTags}
        activeNoteId={activeNoteId}
        setNotes={setNotes}
      />
    </div>
  );
}

export default Container;
