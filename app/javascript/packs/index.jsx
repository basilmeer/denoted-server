import React, { useCallback, useMemo, useState } from 'react';
import { render } from 'react-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import '@ckeditor/ckeditor5-build-classic';

import Sidebar from '../components/Sidebar';
import Notes from '../components/Notes';

import '../stylesheets/main.scss';

const App = () => {
  return (
    <div className='flex h-screen subpixel-antialiased'>
      <Sidebar />
      <Notes />
      <div className='editor p-5 w-full'>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          config={{ height: '800px' }}
          onInit={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
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
