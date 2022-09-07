import { React, useState, useEffect } from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import { MdLoop } from "react-icons/md";
import { Tooltip } from "@material-ui/core";
import { Document, pdfjs, Page } from "react-pdf";
import { Base64 } from "js-base64";
import Spinner from "../Spinner/Spinner";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { AiFillCloseCircle } from "react-icons/ai";
import { Grid } from "@material-ui/core";
import "./pdfView.css";
import "../Button/button.css";
// PDF viewer to display pdf not in localy
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFView({ content, jsonContent, updateIsCompiled, scale }) {
  const [isLoading, updateIsLoading] = useState(false);
  const [midJsonRes, updateMidJsonRes] = useState({});
  const [midFile, updateMidFile] = useState("");
  const handler = useFullScreenHandle();

  useEffect(() => {
    handleGenerate();
  }, []);

  const handleDownload = () => {
    let link = document.createElement("a");
    link.href = midFile;
    link.download = "ResumePDF.pdf";
    link.click();
  };

  const handleFullScreen = () =>
    handler.active ? handler.exit() : handler.enter();

  const requestPDF = () => {
    const content = localStorage.getItem("latestLatex");
    const formData = new FormData();
    var upload = fetch("https://r-esume-b-uilder-api.herokuapp.com/upload", 
    formData.append("file", Base64.encode(content));
    formData.append("form", JSON.stringify(jsonContent));
      method: "POST",
      body: formData,
      credentials: "include",
    });
    upload = upload.then((response) => {
      updateIsLoading(false);
      if (response.ok) return response.blob();
      return response.json();
    });
    upload = upload.then((response) => {
      if (response.error) {
        updateMidJsonRes(response.error);
        throw new Error();
      }
      return response;
    });
    upload
      .then((response) => {
        var rd = new FileReader();
        rd.onloadend = () => {
          var cdData = rd.result;
          updateMidJsonRes("");
          updateMidFile(cdData);
        };
        rd.readAsDataURL(response);
      })
      .catch((error) => console.log(error));
  };

  const handleGenerate = () => {
    updateIsLoading(true);
    updateIsCompiled(true);
    console.log("what is going on");
    requestPDF();
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
      <FullScreen handle={handler}>
        <div
          id="preview"
          className={`pdf-display-container ${
            handler.active ? "view-fullscreen" : ""
          }`}
          onClick={handleFullScreen}
        >
          {/* <div className="all-pdf-display"> */}
          {(() => {
            if (isLoading) {
              return (
                <div className="back-container">
                  <Spinner />
                </div>
              );
            }
            if (Object.keys(midJsonRes).length !== 0)
              return <div className="error-latex">{midJsonRes}</div>;
            if (Object.keys(midFile).length !== 0)
              return (
                <div className="document-wrapper">
                  <div
                    style={{
                      height: "auto",
                    }}
                  >
                    {handler.active && (
                      <Grid container justify="flex-end">
                        <button
                          onClick={handler.exit}
                          className="mi-btn exit-button"
                        >
                          {/* <FontAwesomeIcon 
                      // icon={AiFillCloseCircle}
                      /> */}
                          <AiFillCloseCircle />
                        </button>
                      </Grid>
                    )}
                  </div>
                  <Document
                    file={midFile}
                    className={`document ${
                      handler.active ? "view-fullscreen-document" : ""
                    }`}
                  >
                    <Page
                      renderTextLayer={false}
                      key={`page`}
                      pageNumber={1}
                      scale={scale}
                      className="page"
                      width={1300}
                      height={1300}
                    />
                  </Document>
                </div>
              );
          })()}
        </div>
        {/* </div> */}
      </FullScreen>
    </div>
  );
}

export default PDFView;
