import React, { useState, useEffect, useRef } from "react";
import StartBox from "../StartBox/StartBox";
import ButtonsBox from "../StartBox/ButtonsBox/ButtonsBox";
import formJSON from "../../JSONData/starterFormElements.json";
import WorkSheet from "../WorkSheet/WorkSheet";


const StartBoxWrapper = ({sectionNumber, updateSectionNumber}) => {
    const [section, updateSection] = useState(undefined);
    const firstUpdate = useRef(true);

    var list = {}; 
    formJSON.map((sec) => {
        const {section_label} = sec?? {};
        var ls = {...list, [section_label] : {}};
        list = ls;
    });
    const [allSectionData, updateAllSectionData] = useState(list);
    console.log(sectionNumber + " " + JSON.stringify(allSectionData));

    useEffect(() => {
        if(firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if(sectionNumber === -1) {
            updateSection(undefined);
        };
        updateSection(formJSON[sectionNumber]);
    }, [sectionNumber]);

    const {fields, section_label, size} = section?? {};


    return (<>
                {sectionNumber !== 2 && <>
                {(sectionNumber === -1) &&
                <div className="work-sheet">
                    <ButtonsBox 
                        key = {sectionNumber}
                        section_labels={[...Object.keys(allSectionData)]} 
                        sectionNumber={sectionNumber}
                        updateSectionNumber={updateSectionNumber}
                    ></ButtonsBox>
                </div>
                }
                {(sectionNumber === 1 || sectionNumber === 0) &&
                    <div className="starter-work-sheet">
                    <StartBox 
                    key = {sectionNumber}
                    allSectionData={allSectionData}
                    updateAllSectionData={updateAllSectionData}
                    sectionNumber={sectionNumber}
                    updateSectionNumber={updateSectionNumber}
                    size={size}
                    fields={fields}
                    section_label={section_label}
                    ></StartBox>
                    </div>
                }
                </>}
                {sectionNumber === 2 && <WorkSheet/>}
    </>
    );
};

export default StartBoxWrapper;