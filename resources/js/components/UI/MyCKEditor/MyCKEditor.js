import PropTypes from 'prop-types';
import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const MyCKEditor = (props) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={props.content}
      onChange={(event, editor) => {
        props.setData(editor.getData());
      }}
      config={{
        toolbar: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'blockQuote',
          'imageUpload',
          'imageStyle:full',
          'imageStyle:side',
          'insertTable',
          '|',
          'undo',
          'redo',
        ],
        language: 'pt',
        heading: {
          options: [
            {
              model: 'paragraph',
              title: 'Parágrafo',
              class: 'ck-heading_paragraph',
            },
            {
              model: 'heading1',
              view: 'h2',
              title: 'Título 1',
              class: 'ck-heading_heading1',
            },
            {
              model: 'heading2',
              view: 'h3',
              title: 'Título 2',
              class: 'ck-heading_heading2',
            },
            {
              model: 'heading3',
              view: 'h4',
              title: 'Título 3',
              class: 'ck-heading_heading3',
            },
          ],
        },
        height: '400px',
      }}
    />
  );
};

MyCKEditor.propTypes = {
  content: PropTypes.any,
  setData: PropTypes.func,
};

export default MyCKEditor;
