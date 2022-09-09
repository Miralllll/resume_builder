import React, { useState, useEffect, useRef } from "react";
import SectionBox from "../SectionElement/SectionBox";
import PlusButton from "../Button/PlusButton";

const Section = ({allSectionData, updateAllSectionData, sectionNumber, fields, size}) => {
        const [sectionBoxes, updateSectionBoxes] = useState(allSectionData[Object.keys(allSectionData)[sectionNumber]]);
        const firstUpdate = useRef(true);
        const [removePressed, updateRemovePressed] = useState([false, -1]);

        var fieldsCopy = fields;
        var sizeCopy = size;

        useEffect(() => {
            if(firstUpdate.current) {
                firstUpdate.current = false;
                return;
            }
            var data = allSectionData;
            // if(sectionNumber === 1) {
            //     var firstBox = allSectionData[Object.keys(allSectionData)[sectionNumber]][0];
            //     console.log(firstBox);
            //     var newFirstBox = sectionBoxes[0];
            //     // firstBox[firstBox.length() - 2] = newFirstBox[0];
            //     // firstBox[firstBox.length() - 1] = newFirstBox[1];
            // }
            allSectionData[Object.keys(allSectionData)[sectionNumber]] = sectionBoxes;

            updateAllSectionData(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [sectionBoxes]);

        useEffect(() => {
            if(!removePressed || removePressed[0] === false || removePressed[1] === -1) {
                return;
            }
            var list = [...sectionBoxes];
            list.splice(removePressed[1]-1, 1);
            updateSectionBoxes(list);
            updateRemovePressed(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [removePressed]);


        return (
            <div>
                {sectionBoxes.length !== 0 ? sectionBoxes.map((sectionBoxCurr, index) => {
                    if(sectionNumber===0 && index===1 && size >= 2) {
                        fieldsCopy = [fields[size - 2], fields[size - 1]];
                        sizeCopy = 2;
                    }
                    return (
                    <div key={Object.keys(sectionBoxCurr)[0]} >
                        <SectionBox
                            key={index  + 1}
                            sectionBoxes={sectionBoxes} 
                            updateSectionBoxes={updateSectionBoxes} 
                            fields={fieldsCopy} 
                            size={sizeCopy}
                            index={index}
                            actualIndex={Object.keys(sectionBoxCurr)[0]}
                        >
                        </SectionBox>
                        <PlusButton
                            sectionBoxes={sectionBoxes} 
                            updateSectionBoxes={updateSectionBoxes}
                            removePressed = {removePressed} 
                            updateRemovePressed = {updateRemovePressed}
                            isLast={sectionBoxes.length - 1 === index} 
                            isZero={false}
                            index={index + 1}
                            actualIndex={Object.keys(sectionBoxCurr)[0]}
                        />
                    </div>
                    );
                }
                    ) :
                    <div key={0}>
                        <PlusButton
                        sectionBoxes={sectionBoxes}
                        updateSectionBoxes={updateSectionBoxes}
                        isLast={true}
                        isZero={true}
                        index={0}
                        actualIndex={0}
                    />
                    </div>
                }
            </div>
            
        );
};

export default Section;