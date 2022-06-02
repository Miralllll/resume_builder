import React, { useState, useEffect } from "react";
import Split from "react-split";
import './workSheet.css';
import '../Split/split.css';
import Editor from "../Editor/Editor";

function WorkSheet() {
    const [direction, setDirection] = useState("horizontal");
    let markdown = localStorage.getItem("markdown") || localStorage.getItem("markdown");
    const [latex, setLatex] = useState(markdown);

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
          content={latex}
          changeContent={setLatex}
        />
        
        </Split>
        </div>
    );
}

export default WorkSheet;