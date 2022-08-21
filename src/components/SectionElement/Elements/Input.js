import React, { useRef } from "react";

const Input = ({field_id, field_label, field_placeholder, field_value, updateSectionElem}) => {

    const firstUpdate = useRef(null);

    const handleSectionElementChange = () => {
        updateSectionElem(firstUpdate.current.value);
    };

    return (
        <div className={field_label === "Summary" || field_label === "Website" ? "mb-3 col-12": "mb-3 col-6"}>
            <label htmlFor="exampleInput" className="form-label">{field_label}</label>
            <input type="text" className="form-control" id={field_id} aria-describedby="Help"
            placeholder={field_placeholder ? field_placeholder : ""} 
            ref={firstUpdate}
            defaultValue={field_value}
            onChange={(e) => {handleSectionElementChange(e)}}/>
        </div>
    );
};

export default Input;