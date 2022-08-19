import React from "react";

const Select = ({field_id, field_label, field_options}) => {

    return (
        <div className="mb-3 col-6">
            <label htmlFor="exampleInput" className="form-label">{field_label}</label>
            <select id={field_id} className="form-select" aria-label="Default select example">
                {
                    field_options.length > 0 &&
                    field_options.map(
                    (option, i) => {
                        return <option value={option.option_label} key={i}>{option.option_label}</option>
                    })
                };
            </select>
        </div>
        
    );
};

export default Select;