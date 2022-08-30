import React, { useState, useEffect, useRef } from "react";
import StartBox from "../StartBox/StartBox";
import ButtonsBox from "../StartBox/ButtonsBox/ButtonsBox";
import formJSON from "../../JSONData/starterFormElements.json";
import WorkSheet from "../WorkSheet/WorkSheet";


const StartBoxWrapper = () => {
    const [sectionNumber, updateSectionNumber] = useState(-1);
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
            console.log("zirooo");
            updateSection(undefined);
        };
        updateSection(formJSON[sectionNumber]);
        console.log(section);
    }, [sectionNumber]);

    const {fields, section_label, size} = section?? {};
    console.log(fields + " " + section_label + " " + size);


    return (
        <div>
            {
            (sectionNumber !== 2) &&
                <div className="work-sheet">
                    {console.log("sectionnum" + sectionNumber)}
                    {
                    (sectionNumber === -1)  && 
                    
                    <div key={sectionNumber} className="starter-work-sheet"> 
                    {console.log([...Object.keys(allSectionData)])}
                            <ButtonsBox 
                                key = {sectionNumber}
                                section_labels={[...Object.keys(allSectionData)]} 
                                sectionNumber={sectionNumber}
                                updateSectionNumber={updateSectionNumber}
                            >
                            </ButtonsBox>
                </div>
            }
            <StartBox 
            allSectionData={allSectionData}
            updateAllSectionData={updateAllSectionData}
            sectionNumber={sectionNumber + 1}
            updateSectionNumber={updateSectionNumber}
            size={size}
            fields={fields}
            section_label={section_label}
            ></StartBox>
        </div>
    }
    {sectionNumber === 2 && <WorkSheet/>}
    </div>
    );
};

export default StartBoxWrapper;