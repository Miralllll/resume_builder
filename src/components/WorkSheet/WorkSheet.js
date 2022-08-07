import React, { useState, useEffect } from "react";
import Split from "react-split";
import './workSheet.css';
import '../Split/split.css';
import Editor from "../Editor/Editor";
import PDFView from "../PDFView/PDFView";
const templete1 = "../../Data/templete1.tex"

function WorkSheet() {
    const [direction, setDirection] = useState("horizontal");
    let savedTex = localStorage.getItem("savedTex") || templete1;
    const [latexContent, updateLatexContent] = useState(savedTex);
    const [isCompiled, updateIsCompiled] = useState(true);

    useEffect(() => {
        let changeDirection = () => {
            setDirection(window.innerWidth < 600 ? "vertical" : "horizontal");
        };
        changeDirection();
        window.onresize = changeDirection;
    }, []);

    return (
        <div className="work-sheet">
        <Split
            className="card-wrapper"
            sizes={[50, 50]}
            minSize={direction === "horizontal" ? 300 : 100}
            expandToMin={true}
            gutterAlign="center"
            direction={direction}
        >

        <Editor
            updateIsCompiled={updateIsCompiled}
            isCompiled={isCompiled}
            content={latexContent}
            changeContent={updateLatexContent}
        />
        <PDFView content={latexContent} updateIsCompiled={updateIsCompiled} />
        
        </Split>
        </div>
    );
}

export default WorkSheet;