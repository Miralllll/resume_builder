import React, { useState, useEffect } from "react";
import Split from "react-split";
import "./workSheet.css";
import "../Split/split.css";
import Editor from "../Editor/Editor";
import PDFView from "../PDFView/PDFView";
import ResumeBar from "../ResumeBar/ResumeBar";
import { Grid } from "@material-ui/core";
import { Base64 } from "js-base64";

import formJSON from "../../JSONData/formElement.json";
import Section from "../Section/Section";
import ScrollBars from "react-custom-scrollbars";
import { useParams } from "react-router-dom";
const {someInput} = require("../../Data/default");

function WorkSheet() {
  const { title } = useParams();

  React.useState({
    width: window.innerWidth,
  });
  const [direction, setDirection] = useState(
    window.innerWidth < 1020 ? "vertical" : "horizontal"
  );
  const [isAuth, updateIsAuth] = useState(false);
  const [latexContent, updateLatexContent] = useState("");
  // const [isLoading, updateIsLoading] = useState(true);

  const getResume = async (title) => {
    try {
      const res = await fetch(`https://r-esume-b-uilder-api.herokuapp.com/resumes/get`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          label: title,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.document) {
        updateLatexContent(data.document);
        updateAllSectionData(JSON.parse(data.formInfo));
        updateIsAuth(true);
        // relocation on main page to login
        // history.push(`/creator/${data.title}`);
      } else continueAsGuest();
    } catch (err) {
      continueAsGuest();
      // updateIsLoading(false);
    }
  };

  const continueAsGuest = () => {
    var list = {};
    formJSON.map((sec) => {
      const { section_label } = sec ?? {};
      var ls = { ...list, [section_label]: [{ 1: {} }] };
      list = ls;
      return ls;
    });
    updateLatexContent(someInput);
    updateAllSectionData(list);
    updateIsAuth(true);
  };

  useEffect(() => {
    getResume(title);
  }, []);

  const [isCompiled, updateIsCompiled] = useState(true);
  const [pdfScale, updatePdfScale] = useState(
    window.innerWidth < 1020 ? 0.7 : 0.9
  );
  const [splitSize, updateSplitSize] = useState(
    window.innerWidth < 1020 ? [50, 50] : [60, 40]
  );

  const [sectionNumber, updateSectionNumber] = useState(0);
  const [section, updateSection] = useState(formJSON[sectionNumber]);
  const [allSectionData, updateAllSectionData] = useState({});

  useEffect(() => {
    if (!isCompiled) return;
    updateIsCompiled(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latexContent, isCompiled]);

  const { fields, section_label, size } = section ?? {};

  useEffect(() => {
    updateSection(formJSON[sectionNumber]);
    if(sectionNumber === -1) {
      // sendFormInfoToGetLatex();
    }
  }, [sectionNumber]);

  const sendFormInfoToGetLatex = async () => {
    const formData = new FormData();
    formData.append("file", Base64.encode(latexContent));
    formData.append("form", JSON.stringify(allSectionData));
    formData.append("title", title);
    var upload = fetch("http://localhost:3050/creator/getlatex", {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    upload = upload.then((response) => {
      // updateIsLoading(false);
      if (response.ok) return response.blob();
      return response.json();
    });
    upload = upload.then((response) => {
      if (response.error) {
        // updateMidJsonRes(response.error);
        throw new Error();
      }
      return response;
    });
    upload
      .then((response) => {
        var rd = new FileReader();
        rd.onloadend = () => {
          var cdData = rd.result;
          // updateMidJsonRes("");
          // updateMidFile(cdData);
        };
        rd.readAsDataURL(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1020) {
        setDirection("vertical");
        updatePdfScale(0.7);
        updateSplitSize([50, 50]);
      } else {
        setDirection("horizontal");
        updatePdfScale(0.9);
        updateSplitSize([60, 40]);
      }
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    // updateSectionNumber(Number(-1));
  }, [allSectionData]);

  return (
    <div className="work-sheet">
      <ResumeBar
        updateSectionNumber={updateSectionNumber}
        sectionNumber={sectionNumber}
      ></ResumeBar>
      <Split
        className="card-wrapper"
        sizes={splitSize}
        expandToMin={true}
        gutterAlign="center"
        direction={direction}
        // minSize={direction === "horizontal" ? 400 : 100}
      >
        <ScrollBars className="first-flex scroll">
          {sectionNumber === -1 && isAuth && (
            <Editor
              className="w-full h-full md:h-screen"
              updateIsCompiled={updateIsCompiled}
              isCompiled={isCompiled}
              content={latexContent}
              changeContent={updateLatexContent}
            />
          )}
          {sectionNumber !== -1 && isAuth && (
            <div
              key={(sectionNumber) => {
                var keyCurr = sectionNumber;
                return keyCurr;
              }}
              className="container-second"
            >
              <Grid container justifyContent="center" className="mb-1">
                <h2>{section_label}</h2>
              </Grid>
              <Section
                key={sectionNumber}
                allSectionData={allSectionData}
                updateAllSectionData={updateAllSectionData}
                sectionNumber={sectionNumber}
                fields={fields}
                size={size}
                isMainPage={"noo"}
              ></Section>
            </div>
          )}
        </ScrollBars>
        <>
        
          <div className="pdfContainer scroll">
          {isAuth && (<PDFView
            className="w-full h-full md:h-screen"
            content={latexContent}
            jsonContent={allSectionData}
            updateIsCompiled={updateIsCompiled}
            scale={pdfScale}
          />)}
            {!isAuth && <div></div>}
          </div>
        </>
      </Split>
    </div>
  );
}

export default WorkSheet;
