import React, { useMemo, useRef }  from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import axios from 'axios';

function App() {
  const [content, setContent] = useState('')
  const quillRef = useRef();
  console.log(content)

  const imgHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
      const file = input.files[0];
      
      if(file) {
        const formData = new FormData();
        formData.append('image', file);

        const response = await axios.post('http://localhost:8888/test/img', formData, {
          headers: {
            "Content-Type" : "multipart/form-data"
          }
        });

        const imgUrl = `http://localhost:8888/upload/${response.data}`;

        if(quillRef.current) {
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection();
          editor.insertEmbed(range.index, "image", imgUrl);
        }

      }

    }
  }

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image']
      ],
      handlers : {
        image: imgHandler
      }
    }
  }), [])

  return (
    <div className="App">
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={setContent}
        modules={modules}
      />

    </div>
  );
}

export default App;