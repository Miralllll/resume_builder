import React, { useState, useEffect, useRef } from "react";
import SectionElement from "./SectionElement";

const SectionBox = ({sectionBoxes, updateSectionBoxes, fields, size, index, actualIndex}) => {

    const [sectionBox, updateSectionBox] = new useState(sectionBoxes[index][actualIndex]);
    console.log(JSON.stringify(sectionBoxes[index][actualIndex]) + " " + index + " " + actualIndex);
    const firstUpdate = useRef(true);

    useEffect(() => {
        if(firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        var list = [...sectionBoxes];
        list[index][actualIndex] = sectionBox;
        updateSectionBoxes(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionBox]);

    return (
        <div className="container-second">
            <form>
                {(() => {
                    const items = [];
                    for(var i = 0, sz = size; i < sz ;) {
                        while(i < sz && fields[i].display_full_line === "yes") {
                            const innerItems = [];
                            innerItems.push(<SectionElement
                                                key={i} 
                                                index={i}
                                                sectionBox={sectionBox} 
                                                updateSectionBox={updateSectionBox}
                                                field={fields[i]} 
                                                isMainPage={"noo"}/>);
                            items.push( <div key={i} className="row">{innerItems}</div>);
                            i++;
                        };
                        var iterator = 0;
                        while(i < sz && fields[i].display_full_line === "no") {
                            const hereItems = [];
                            hereItems.push(<SectionElement
                                key={i} 
                                index={i}
                                sectionBox={sectionBox} 
                                updateSectionBox={updateSectionBox}
                                field={fields[i]} 
                                isMainPage={"noo"}/>);
                            iterator++;
                            if(iterator % 2 === 0) {
                                items.push( <div key={i++} className="row">{hereItems}</div>);
                                continue;
                            }
                            i++;
                            if(i !== sz && (fields[i].display_full_line === "no")) {
                                hereItems.push(<SectionElement
                                                    key={i}
                                                    index={i}
                                                    sectionBox={sectionBox} 
                                                    updateSectionBox={updateSectionBox}
                                                    field={fields[i]} 
                                                    isMainPage={"noo"}/>);
                                items.push( <div key={i} className="row">{hereItems}</div>);
                                i++;
                                iterator++;
                            }
                        };
                    };
                    return items;
                })()}
                
            </form>
        </div>
    );
};

export default SectionBox;