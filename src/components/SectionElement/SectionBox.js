import React, { useState, useEffect, useRef } from "react";
import SectionElement from "./SectionElement";

const SectionBox = ({sectionBoxes, updateSectionBoxes, fields, size, index, actualIndex}) => {

    const [sectionBox, updateSectionBox] = new useState(sectionBoxes[index][actualIndex]);

    const firstUpdate = useRef(true);

    useEffect(() => {
        if(firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        var list = [...sectionBoxes];
        list[index][actualIndex] = sectionBox;
        updateSectionBoxes(list);
    }, [sectionBox]);

    return (
        <div className="container-second">
            <form>
                {(() => {
                    const items = [];
                    for(var i = 0, sz = size; i < sz ; i++) {
                        const innerItems = [];
                        var field = fields[i];
                        innerItems.push(<SectionElement
                                            key={i} 
                                            index={i}
                                            sectionBox={sectionBox} 
                                            updateSectionBox={updateSectionBox}
                                            field={fields[i]} />);
                        if(field.field_label === "Website" || field.field_label === "Summary") {
                            items.push( <div key={i} className="row">{innerItems}</div>);
                        } else if(i % 2 === 0) {
                            if(i !== sz - 1 && (fields[i+1].field_label !== "Website" && fields[i+1].field_label !== "Summary")) {
                                innerItems.push(<SectionElement
                                                    key={i+1}
                                                    index={i+1}
                                                    sectionBox={sectionBox} 
                                                    updateSectionBox={updateSectionBox}
                                                    field={fields[i+1]} />);
                                i++;
                            }
                            items.push(<div key={i+1} className="row">{innerItems}</div>);
                        }
                    };
                    return items;
                })()}
                
            </form>
        </div>
    );
};

export default SectionBox;