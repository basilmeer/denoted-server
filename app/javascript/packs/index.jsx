import React, { useState } from 'react';
import { render } from 'react-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import '@ckeditor/ckeditor5-build-inline';

import Sidebar from '../components/Sidebar';
import Notes from '../components/Notes';
import '../stylesheets/main.scss';

const App = () => {
  const [title, setTitle] = useState('Test title');
  const [body, setBody] = useState('<p>Hello from CKEditor 5!</p>');
  const [tags, setTags] = useState([]);

  const handleTagsDelete = (id) => {
    const tempTags = tags.filter((tag) => tag.id !== id);
    setTags(tempTags);
  }

  const handleTagsChange = (e) => {
    const tag = e.target.value.replace(',', '').replace(/ /g, '-');

    /* Add a new tag if the user presses comma */
    if (e.keyCode === 188) {
      e.target.value = '';
      if (tag !== '')
        setTags([...tags, { id: tags.length + 1, text: tag }]);
    }
  }

  const handleBackspace = (e) => {
    const tag = e.target.value.replace(',', '').replace(/ /g, '-');

    /* Remove the last tag if user presses backspace */
    if (e.keyCode === 8 && tag.length === 0) {
      handleTagsDelete(tags[tags.length - 1].id);
    }
  }

  return (
    <div className='flex h-screen subpixel-antialiased'>
      <Sidebar />
      <Notes />
      <div className='editor p-5 w-full'>
        <div className='form-group flex flex-col mb-4 border border-gray-300'>
          <input type='text' type='title' className='form-control px-2 py-3' placeholder='Title...' onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <div className='form-group flex flex-col mb-4'>
          <div className='editor-area border border-gray-300'>
            <CKEditor
              editor={InlineEditor}
              data={body}
              onChange={(event, editor) => {
                const data = editor.getData();
                setBody(data);
              }}
            />
          </div>
        </div>
        <div className='form-group flex flex-col mb-4'>
          <label htmlFor='tags'>Tags</label>
          <div className='tags-container flex border border-gray-300 px-3 py-2'>
            <div className='tags'>
              {tags.map((t, i) => (
                <button className='tag border border-gray-300' key={i}>
                  {t.text}
                  <span className="close" onClick={() => handleTagsDelete(t.id)}>
                    <i className='fas fa-times'></i>
                  </span>
                </button>
              ))}
            </div>
            <input id='tags' type='text' type='tags' className='form-control text-sm px-2' placeholder='Add a new tag here' onKeyUp={handleTagsChange} onKeyDown={handleBackspace} />
          </div>
        </div>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
          Save
        </button>
      </div>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('root'),
  );
})
