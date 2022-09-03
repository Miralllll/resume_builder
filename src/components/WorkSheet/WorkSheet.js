import React, { useState, useEffect } from "react";
import Split from "react-split";
import "./workSheet.css";
import "../Split/split.css";
import Editor from "../Editor/Editor";
import PDFView from "../PDFView/PDFView";
import ResumeBar from "../ResumeBar/ResumeBar";
import { Grid } from "@material-ui/core";

import formJSON from "../../JSONData/formElement.json";
import Section from "../Section/Section";
import ScrollBars from "react-custom-scrollbars";
const { templete1 } = require("../../Data/templete1");

function WorkSheet() {
  React.useState({
    width: window.innerWidth,
  });
  const [direction, setDirection] = useState(
    window.innerWidth < 1020 ? "vertical" : "horizontal"
  );
  let savedTex = localStorage.getItem("latestLatex") || templete1;
  const [latexContent, updateLatexContent] = useState(savedTex);
  const [isCompiled, updateIsCompiled] = useState(true);
  const [pdfScale, updatePdfScale] = useState(
    window.innerWidth < 1020 ? 0.7 : 0.9
  );
  const [splitSize, updateSplitSize] = useState(
    window.innerWidth < 1020 ? [100, 0] : [60, 40]
  );

  const [sectionNumber, updateSectionNumber] = useState(0);
  const [section, updateSection] = useState(formJSON[sectionNumber]);
  var list = {};
  formJSON.map((sec) => {
    const { section_label } = sec ?? {};
    var ls = { ...list, [section_label]: [{ 1: {} }] };
    list = ls;
    return ls;
  });
  const [allSectionData, updateAllSectionData] = useState(list);
  console.log(allSectionData);

  useEffect(() => {
    if (!isCompiled) return;
    console.log(templete1);
    console.log(JSON.stringify(allSectionData));
    updateIsCompiled(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latexContent, isCompiled]);

  const { fields, section_label, size } = section ?? {};

  useEffect(() => {
    updateSection(formJSON[sectionNumber]);
  }, [sectionNumber]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1020) {
        setDirection("vertical");
        updatePdfScale(0.7);
        updateSplitSize([100, 0]);
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
      >
        {" "}
      </ResumeBar>
      <Split
        className="card-wrapper"
        sizes={splitSize}
        expandToMin={true}
        gutterAlign="center"
        direction={direction}
        // minSize={direction === "horizontal" ? 400 : 100}
      >
        <ScrollBars className="first-flex scroll">
          {sectionNumber === -1 && (
            <Editor
              className="w-full h-full md:h-screen"
              updateIsCompiled={updateIsCompiled}
              isCompiled={isCompiled}
              content={latexContent}
              changeContent={updateLatexContent}
            />
          )}
          {sectionNumber !== -1 && (
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
        {/* <div className="w-full h-full md:h-screen" ></div> */}
        <PDFView
          className="w-full h-full md:h-screen"
          content={latexContent}
          jsonContent={allSectionData}
          updateIsCompiled={updateIsCompiled}
          scale={pdfScale}
        />
      </Split>
    </div>
  );
}

export default WorkSheet;
