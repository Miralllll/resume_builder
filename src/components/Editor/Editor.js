import AceEditor from "react-ace";
import React,  { useState, useRef } from "react";
import "./editor.css";

import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/snippets/latex";
import "ace-builds/src-noconflict/ext-language_tools";

function Editor({ content, changeContent}) {

  const [annotations, setAnnotations] = useState([]);
  const editorRef = useRef(null);

  const handleEditorChange = (value, event) => {
    changeContent(value);
    // update right side probably every time vs idk
  };

  return (
    <div className="tex-editor scroll">
      <div className="card-title">
        <div className="right-section">
        </div>
      </div>
    
      <AceEditor
        mode="latex"
        value={content}
        name="editor"
        height="100%"
        width="100%"
        fontSize="15px"
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        enableSnippets={true}
        editorProps={{ $blockScrolling: false }}

        onChange={handleEditorChange}
        onValidate={setAnnotations}
        ref={editorRef}
        annotations={annotations}
      />
    </div>
  );
}
export default Editor;