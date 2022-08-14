import React, { useState, useEffect } from "react";
import Split from "react-split";
import './workSheet.css';
import '../Split/split.css';
import Editor from "../Editor/Editor";
import PDFView from "../PDFView/PDFView";
import ResumeBar from "../ResumeBar/ResumeBar"
const templete1 = '\\documentclass[12pt]{article}\\usepackage[utf8]{inputenc}\\title{Name}\\author{Job}\\begin{document}\\maketitle\\section{Work Experience}\\subsection{Data Scientist}\\end{document}'

function MyComponent() {
    React.useState({ 
      width: window.innerWidth
    })
    const [direction, setDirection] = useState("horizontal");
    let savedTex = localStorage.getItem("latestLatex") || templete1;
    const [latexContent, updateLatexContent] = useState(savedTex);
    const [isCompiled, updateIsCompiled] = useState(true);
    const [pdfScale, updatePdfScale] = useState(0.9);
    const [splitSize, updateSplitSize] = useState([50, 50]);

    useEffect(() => {
        
    }, [latexContent, isCompiled]);

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
                updateSplitSize([50, 50]);
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
        <Editor
            className="w-full h-full md:h-screen"
            updateIsCompiled={updateIsCompiled}
            isCompiled={isCompiled}
            content={latexContent}
            changeContent={updateLatexContent}
        />
        <PDFView className="w-full h-full md:h-screen" 
        content={latexContent} updateIsCompiled={updateIsCompiled} scale={pdfScale}/>
    </Split>;
}

function WorkSheet() {
    return (
        <div className="work-sheet">
            <ResumeBar> </ResumeBar>
            {(() => {
                return MyComponent();
            })()}
        </div>
    );
}

export default WorkSheet;