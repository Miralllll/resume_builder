import React, { useState, useEffect, useRef } from "react";
import StarterBoxCont from './StarterBoxCont';
import "../Button/button.css";

function StartBox({sectionNumber, updateSectionNumber, section_label, size, fields, allSectionData, updateAllSectionData}) {
    const [sectionInfo, updateSectionInfo] = useState(allSectionData[Object.keys(allSectionData)[sectionNumber]]);
    const firstUpdate = useRef(true);
    // const [isPageChanged, updateIsPageChanged] = new useState([false, 0]);

    var fieldsCopy = fields;
    var sizeCopy = size;
    var copy_section_label = section_label;

    useEffect(() => {
        if(firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        var data = allSectionData;
        data[Object.keys(data)[sectionNumber]] = sectionInfo;

        updateAllSectionData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionInfo]);

    return  <div>
                <div className="starter-work-sheet">
                    <StarterBoxCont
                        key={sectionNumber}
                        sectionNumber={sectionNumber} 
                        updateSectionNumber={updateSectionNumber} 
                        sectionInfo={sectionInfo} 
                        updateSectionInfo={updateSectionInfo} 
                        fields={fieldsCopy} 
                        size={sizeCopy}
                        section_label={copy_section_label}
                        >   
                    </StarterBoxCont>
                </div>
            </div>;
}


export default StartBox;