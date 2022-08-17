import React from "react";

const Input = ({field_id, field_label, field_placeholder, field_value}) => {

    return (
        <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label">{field_label}</label>
            <input type="text" className="form-control" id={field_id} aria-describedby="emailHelp"
            placeholder={field_placeholder ? field_placeholder : ""} value={field_value}/>
        </div>
    );
};

export default Input;