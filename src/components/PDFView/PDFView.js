import {React, useState, useEffect} from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import { MdLoop } from "react-icons/md";
import { Tooltip } from "@material-ui/core";
import { Oval } from  'react-loader-spinner';
import { Document, pdfjs, Page } from "react-pdf";

import './pdfView.css'
import '../Button/button.css'
// PDF viewer to display pdf not in localy
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function PDFView({ content, updateIsCompiled, scale}) {
  const [isLoading, updateIsLoading] = useState(false);
  const [midJsonRes, updateMidJsonRes] = useState({});
  const [midFile, updateMidFile] = useState("");
  useEffect(() => {
    handleGenerate();
  }, []);

  const handleDownload = () => {
    // download
  };

  const requestPDF = () => {
    const content = localStorage.getItem("latestLatex");
    console.log(content);
    const formData = new FormData();
    formData.append("pdfpdf", btoa(content));
    var upload = fetch("http://localhost:3040/upload", 
    {
      method: "POST",
      body: formData,
    });
    upload = upload.then((response) => 
    {
      console.log("1");
      updateIsLoading(false);
      if(response.ok) return response.blob();
      return response.json();
    });
    upload = upload.then((response) => 
    {
      console.log("2");
      if(response.error) {
        updateMidJsonRes(response.error);
        throw new Error();
      }
      return response;
    });
    upload.then((response) => {
      console.log("3");
      var rd = new FileReader();
      rd.onloadend = () => {
        var cdData = rd.result;
        updateMidJsonRes("");
        updateMidFile(cdData);
      };
      rd.readAsDataURL(response);
    }).catch((error) => console.log(error));
  }

  const handleGenerate = () => {
    updateIsLoading(true);
    updateIsCompiled(true);
    requestPDF();
    console.log(content + "in view");
  };

return (
    <div className="pdfContainer scroll">
      <div className="pdf">
        <div className="pdf-buttons-container">
          <Tooltip title="GENERATE">
            <button className="mi-btn" onClick={handleGenerate}>
              <MdLoop />
            </button>
          </Tooltip>
          <Tooltip title="PDF">
            <button className="mi-btn" onClick={handleDownload}>
              <CgSoftwareDownload />
            </button>
          </Tooltip>
        </div>
      </div>
      <div id="preview" className="pdf-display-container">
        <div className="all-pdf-display">
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
          if (Object.keys(midJsonRes).length !== 0)
            return <div className="error-latex">{midJsonRes}</div>;
          if (Object.keys(midFile).length !== 0)
            return (
              <div className="document-wrapper">
                <Document
                    file={midFile}
                    className="document"
                  >
                      <Page
                        renderTextLayer={false}
                        key={`page`}
                        pageNumber={1}
                        scale={scale}
                        className="page"
                      /> 
                  </Document>
              </div>
            );
        })()}
        </div>
      </div>
    </div>
  );
}

export default PDFView;