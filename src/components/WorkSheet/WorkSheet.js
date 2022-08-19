import React, { useState, useEffect } from "react";
import Split from "react-split";
import './workSheet.css';
import '../Split/split.css';
import Editor from "../Editor/Editor";
import PDFView from "../PDFView/PDFView";
import ResumeBar from "../ResumeBar/ResumeBar"
import DatePickerLCL from "../SectionElement/Elements/DatePicker";

import formJSON from "../../JSONData/formElement.json";
import SectionElement from "../SectionElement/SectionElement"; 
import ScrollBars from 'react-custom-scrollbars';

const templete1 = '\\documentclass[12pt]{article}\\usepackage[utf8]{inputenc}\\title{Name}\\author{Job}\\begin{document}\\maketitle\\section{Work Experience}\\subsection{Data Scientist}\\end{document}'

function MyComponent(sectionNumber) {
    React.useState({ 
      width: window.innerWidth
    })
    const [direction, setDirection] = useState("horizontal");
    let savedTex = // localStorage.getItem("latestLatex") || 
    templete1;
    const [latexContent, updateLatexContent] = useState(savedTex);
    const [isCompiled, updateIsCompiled] = useState(true);
    const [pdfScale, updatePdfScale] = useState(0.9);
    const [splitSize, updateSplitSize] = useState([60, 40]);

    const [section, updateSection] = useState(null);

    useEffect(() => {
        console.log(templete1);
    }, [latexContent, isCompiled]);

    useEffect(() => {
        updateSection(formJSON[sectionNumber]);
        console.log(section);
    }, [sectionNumber]);

    const {fields, section_label, size} = section?? {};

    React.useEffect(() => {
        function handleResize() {
            if(window.innerWidth < 600) {
                setDirection("vertical");
                updatePdfScale(0.7);
                updateSplitSize([45, 55]);
            }
            else {
                setDirection("horizontal");
                updatePdfScale(0.9);
                updateSplitSize([60, 40]);
            }
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })
    return <Split
    className="card-wrapper"
    sizes={splitSize}
    expandToMin={true}
    gutterAlign="center"
    direction={direction}
    minSize={direction === "horizontal" ? 400 : 100}>
        <ScrollBars className="first-flex scroll">
        {(() => {
            if(sectionNumber === -1)
            return <Editor
                className="w-full h-full md:h-screen"
                updateIsCompiled={updateIsCompiled}
                isCompiled={isCompiled}
                content={latexContent}
                changeContent={updateLatexContent}
            />
            else 
            return <div className="container-second">
                        <h3>{section_label}</h3>
                        <form>
                        {(() => {
                            const items = [];
                            for(var i = 0, sz = size; i < sz ; i++) {
                                const innerItems = [];
                                var field = fields[i];
                                console.log(field.field_label);
                                innerItems.push(<SectionElement key={i} field={fields[i]}/>);
                                if(field.field_label === "Website" || field.field_label === "Summary") {
                                    items.push(<div className="row">{innerItems}</div>);
                                } else if(i % 2 === 0) {
                                    if(i !== sz - 1 && (fields[i+1].field_label !== "Website" && fields[i+1].field_label !== "Summary")) {
                                        innerItems.push(<SectionElement key={i+1} field={fields[i+1]}/>);
                                    }
                                    items.push(<div className="row">{innerItems}</div>);
                                }
                            };
                            return items;
                        })()}
                        </form>
                    </div>
        })()}
        </ScrollBars>
        <PDFView className="w-full h-full md:h-screen" 
        content={latexContent} updateIsCompiled={updateIsCompiled} scale={pdfScale}/>
    </Split>;
}

function WorkSheet() {
    const [sectionNumber, updateSectionNumber] = useState(0.0);
    return (
        <div className="work-sheet">
            <ResumeBar updateSectionNumber={updateSectionNumber} sectionNumber={sectionNumber}> </ResumeBar>
            {(() => {
                return MyComponent(sectionNumber);
            })()}
        </div>
    );
}

export default WorkSheet;