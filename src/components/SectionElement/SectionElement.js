import React, { useState, useEffect, useRef } from "react";
import Input from "./Elements/Input";
import Select from "./Elements/Select";
import DatePickerLCL from "./Elements/DatePicker";

function SectionElement ({index, sectionBox, updateSectionBox, field: {field_type, field_id, field_label, field_placeholder, field_value, field_options}}) {
    const { [field_id]: vl } = sectionBox;
    const val = vl;
    const [sectionElem, updateSectionElem] = useState(val);

    const firstUpdate = useRef(true);

    useEffect(() => {
        if(firstUpdate.current) {
            firstUpdate.current = false;
            return
        }
        var secCopy = sectionBox;
        secCopy[field_id] = sectionElem;
        updateSectionBox(secCopy);
    }, [sectionElem]);

    switch (field_type) {
        case "text":
        return (<Input
            key={index}
            field_id={field_id}
            field_label={field_label}
            field_placeholder={field_placeholder}
            field_value={val}
            // sectionElem={sectionElem}
            updateSectionElem={updateSectionElem}
        />)
        case "select":
        return (<Select
            field_id={field_id}
            field_label={field_label}
            field_options={field_options}
            // sectionElem={sectionElem} 
            // updateSectionElem={updateSectionElem}
        />)
        case "date":
        return (<DatePickerLCL
            field_id={field_id}
            field_label={field_label}
            // sectionElem={sectionElem} 
            // updateSectionElem={updateSectionElem}
        />)
        default:
            return null;
    };
};

export default SectionElement;