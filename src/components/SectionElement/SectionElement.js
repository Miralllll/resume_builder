import React, { useState, useEffect, useRef } from "react";
import Input from "./Elements/Input";
import Select from "./Elements/Select";
import DatePickerLCL from "./Elements/DatePicker";
import StartButton from "../StartBox/Buttons/StartButton";
import { Grid  } from '@material-ui/core';

function SectionElement ({index, sectionBox, errors, updateSectionBox, updateSectionNumber, field: {field_type, field_id, field_label, field_placeholder, field_options, display_full_line}, isMainPage, starterNumber}) {
    const { [field_id]: vl } = sectionBox;
    const val = vl;
    const [sectionElem, updateSectionElem] = useState(val);
    index = !isNaN(field_id)? Number(field_id) : field_id;
    const firstUpdate = useRef(true);

    useEffect(() => {
        if(firstUpdate.current) {
            firstUpdate.current = false;
            return
        }
        var secCopy = sectionBox;
        if(field_id === -1 || sectionElem === undefined) {

            console.log("here an issue" + field_id + " " + sectionElem);
        } else {
            secCopy[field_id] = sectionElem;
            updateSectionBox(secCopy);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionElem]);


    const wrapperr = (scriptt) => {
        if (isMainPage === "no"){
            return <Grid container justifyContent="center">{scriptt}</Grid>;
        }
        return scriptt;
    }

    switch (field_type) {
        case "text":      
        return (
            wrapperr(
            <Input
            key = {index}
            field_id={field_id}
            field_label={field_label}
            field_placeholder={field_placeholder}
            field_value={val}
            field_type={field_type}
            sectionEl={sectionElem}
            display_full_line={display_full_line}
            updateSectionElem={updateSectionElem}
            isMainPage={isMainPage}
            errors={errors}
        />
        )
        )
        case "password":      
        return (
            wrapperr(
            <Input
            key = {index}
            field_id={field_id}
            field_label={field_label}
            field_placeholder={field_placeholder}
            field_value={val}
            field_type={field_type}
            display_full_line={display_full_line}
            updateSectionElem={updateSectionElem}
            isMainPage={isMainPage}
            errors={errors}
        />)
        )
        case "select":
        return (wrapperr(<Select
            field_id={field_id}
            field_label={field_label}
            field_options={field_options}
            field_value={val}
            display_full_line={display_full_line}
            updateSectionElem={updateSectionElem}
            isMainPage={isMainPage}
        />))
        case "date":
        return (wrapperr(<DatePickerLCL
            field_id={field_id}
            field_label={field_label}
            field_value={val}
            display_full_line={display_full_line}
            updateSectionElem={updateSectionElem}
            isMainPage={isMainPage}
        />))
        case "button":
        return (wrapperr(
        <StartButton
            dataKey={index}
            sectionNumber={starterNumber} 
            updateSectionNumber={updateSectionNumber}
            title={field_label}
            isMainPage={isMainPage}
        />))
        default:
            return null;
    };
};

export default SectionElement;