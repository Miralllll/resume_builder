import React, { useState, useEffect, useRef } from "react";
import StarterBoxCont from './StarterBoxCont';
import "../Button/button.css";
import StartButton from "./Buttons/StartButton";

function StartBox({sectionNumber, updateSectionNumber, section_label, size, fields, allSectionData, updateAllSectionData}) {
    const [sectionInfo, updateSectionInfo] = useState(allSectionData[Object.keys(allSectionData)[sectionNumber]]);
    const firstUpdate = useRef(true);
    // const [isPageChanged, updateIsPageChanged] = new useState([false, 0]);

    var fieldsCopy = fields;
    var sizeCopy = size;
    var copy_section_label = section_label;
    console.log(fields);
    console.log(JSON.stringify(sectionInfo))

    useEffect(() => {
        if(firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        var data = allSectionData;
        data[Object.keys(data)[sectionNumber - 1]] = sectionInfo;

        updateAllSectionData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionInfo]);

    return  <div>
    {sectionNumber !== 3 &&
        <div className="work-sheet">
            {sectionNumber !== 0 
            &&
                        <StarterBoxCont
                            key={sectionNumber}
                            starterNumber={sectionNumber} 
                            updateSectionNumber={updateSectionNumber} 
                            sectionInfo={sectionInfo} 
                            updateSectionInfo={updateSectionInfo} 
                            fields={fieldsCopy} 
                            size={sizeCopy}
                            section_label={copy_section_label}
                            >   
                        </StarterBoxCont>
                        
            }
        </div>
    }
    </div>
    ;
}


export default StartBox;