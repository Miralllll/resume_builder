import AceEditor from "react-ace";
import React,  {useEffect,  useState, useRef } from "react";
import "./editor.css";

import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/snippets/latex";
import "ace-builds/src-noconflict/ext-language_tools";

function Editor({ content, changeContent, isCompiled, updateIsCompiled}) {
  const [annotations, updateAnnotations] = useState([]);
  const editorRef = useRef(null);

  useEffect(() => {
    // console.log(content);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCompiled]);

  useEffect(() => {
    if (content !== "") localStorage.setItem("latestLatex", content);
    else localStorage.setItem("latestLatex", "");
  }, [content]);

  const handleEditorChange = (value) => {
    changeContent(value);
  };

  return (
    <div className="tex-editor scroll">
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
        onValidate={updateAnnotations}
        ref={editorRef}
        annotations={annotations}
      />
    </div>
  );
}
export default Editor;