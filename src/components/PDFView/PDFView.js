import {React, useState, useEffect} from "react";
import { CgSoftwareDownload as SaveIcon } from "react-icons/cg";
import { MdLoop as CompileIcon } from "react-icons/md";
import { Tooltip } from "@material-ui/core";
import { Oval } from  'react-loader-spinner';

import './pdfView.css'
import '../Button/button.css'

function PDFView({ content, updateIsCompiled }) {
  const [isLoading, updateIsLoading] = useState(false);

  useEffect(() => {
    handleGenerate();
  },);

  const handleDownload = () => {
    // download
  };

  const handleGenerate = () => {
    updateIsLoading(true);
    updateIsCompiled(true);
    console.log(content + "in view");
    updateIsLoading(false);
  };

return (
    <div className="pdfContainer scroll">
      <div className="pdf">
        <div>
          <Tooltip title="GENERATE">
            <button className="btn" onClick={handleGenerate}>
              <CompileIcon />
            </button>
          </Tooltip>
          <Tooltip title="PDF">
            <button className="btn" onClick={handleDownload}>
              <SaveIcon />
            </button>
          </Tooltip>
        </div>
      </div>
      <div id="preview" className="all-pdf-display">
        {(() => {
          if (isLoading) {
            return (
            <div className="back-container">
              <Oval color = {"lightseagreen"}
                    height = {60}
                    width = {60}
                    radius = {20}/>
            </div>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default PDFView;