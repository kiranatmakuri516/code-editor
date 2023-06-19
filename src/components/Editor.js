import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const MonacoEditorComponent = (props) => {
const handleCodeChange = (value, event) => {
  onChange(value);
};


  const editorOptions = {
      selectOnLineNumbers: true,
    };
    
    const {
        lang,
        name,
        value,
        onChange
          }=props
    return (
        <div className="editor-div">
            <div className="title">
                {name}
            </div>
                <MonacoEditor
               language={lang}
      theme="light"
                value={value}
      options={editorOptions}
      onChange={handleCodeChange}    
      height="400"
    />
      </div>

  );
};

export default MonacoEditorComponent;
