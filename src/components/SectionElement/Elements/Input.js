import React, { useRef, useState, useCallback } from "react";
const Input = ({field_id, field_label, field_placeholder, field_value, display_full_line, updateSectionElem, isMainPage, errors}) => {
    const firstUpdate = useRef(null);
    const [val, setValue] = useState("");
    
    const handleSectionElementChange = (e) => {
        if(isMainPage === "noo")
            updateSectionElem(firstUpdate.current.value);
        else updateSectionElem(e.target.value);
    };

    const handleInputChange = useCallback((e) => {
        setValue(e.target.value);
        handleSectionElementChange(e);
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [setValue]);


    return (
        <div className={` ${ display_full_line === "no" ? "col-6" : ""} ${ isMainPage === "no" ? "col-12" : ""}`}>
            
            <label htmlFor={field_label} className="form-label" style={({color: `${ isMainPage === "no" ? "#707070" : ""}`})}>{field_label}</label>
            {field_label !== "Summary" && (isMainPage === "noo" &&
            <input type={field_id}
            className="form-control" 
            id={field_id} 
            aria-describedby="Help"
            placeholder={field_placeholder ? field_placeholder : ""} 
            ref={firstUpdate}
            defaultValue={field_value}
            onChange={(e) => {handleSectionElementChange(e)}}/>)}
            {field_label !== "Summary" && (isMainPage !== "noo" &&
            <input type={field_id} 
            className="form-control" 
            id={field_id} 
            value={val}
            aria-describedby="Help"
            placeholder={field_placeholder ? field_placeholder : ""}
            onChange={handleInputChange}/>)}
            {field_label === "Summary" && (isMainPage === "noo" &&
                <textarea
                type={field_id}
                className="form-control"
                aria-describedby="Help"
                ref={firstUpdate}
                onChange={(e) => {handleSectionElementChange(e)}}
                defaultValue={field_value}
                name="form-control"
                placeholder={field_placeholder ? field_placeholder : ""} 
                rows={4}
                />
            )}
            {field_label === "Summary" && (isMainPage !== "noo" &&
                <textarea
                type={field_id}
                className="form-control"
                aria-describedby="Help"
                onChange={handleInputChange}
                value={val}
                name="form-control"
                placeholder={field_placeholder ? field_placeholder : ""} 
                rows={4}
                />
            )}
            <div className={`error ${ field_label } `} style={({display: "inline-block"})}>{errors !== undefined ? (errors[`${field_id}`] !== ''? errors[`${field_id}`]: <span>&nbsp;&nbsp;</span>) : <span>&nbsp;&nbsp;</span>}</div>
        </div>
    );
};

export default Input;