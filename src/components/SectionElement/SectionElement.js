import React from "react";
import Input from "./Elements/Input";
import Select from "./Elements/Select";
import DatePickerLCL from "./Elements/DatePicker";

const SectionElement = ({field: {field_type, field_id, field_label, field_placeholder, field_value, field_options}}) => {

    switch (field_type) {
        case "text":
        return (<Input 
            field_id={field_id}
            field_label={field_label}
            field_placeholder={field_placeholder}
            field_value={field_value}
        />)
        case "select":
        return (<Select
            field_id={field_id}
            field_label={field_label}
            field_options={field_options}
        />)
        case "date":
        return (<DatePickerLCL
            field_id={field_id}
            field_label={field_label}
        />)
        default:
            return null;
    };
};

export default SectionElement;