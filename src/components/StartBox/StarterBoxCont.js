import React, { useState, useEffect, useRef } from "react";
import SectionElement from "../SectionElement/SectionElement";
import LoginButton from "./Buttons/LoginButton";
import { Grid  } from '@material-ui/core';
import './starter.css';

const StarterBoxCont = ({sectionNumber, updateSectionNumber, sectionInfo, fields, size, section_label}) => {
    const [sectionBox, updateSectionBox] = new useState(sectionInfo);
    const [errors, updateErrors] = useState({email: '', password: ''});

    const handleChange = async (e) => {
        if(e.target.id === "button Submit") {
            if(sectionNumber === 1) {
                var errs = errors;
                errs.email = '';
                errs.password = '';
                updateErrors(errs);
                const email = sectionBox.email;
                const password = sectionBox.password;
                try {
                    const res = await fetch('http://localhost:3040/signup', {
                        method: "POST",
                        body: JSON.stringify({email: email, password: password}),
                        headers: {'Content-Type': 'application/json'}
                    });
                    const data = await res.json();
                    if(data.errors) {
                        updateErrors(data.errors);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
            
        } else if(e.target.id.startsWith("button")) {
            updateSectionNumber(sectionNumber === 1 ? 0 : 1);
        }
    };;

    return (
        <Grid container style={({backgroundColor: "transparent"})}>
            <div className="container-second">
            {/* <Grid container justifyContent="center" className="mb-1 container-second"><h2>{section_label}</h2></Grid> */}
            <form onClick={handleChange}>
            <div className="starter-form">
                <div className=" mb-4 col-12"><Grid container justifyContent="center"><h2>{section_label}</h2></Grid></div>

                {(() => {
                    const items = [];
                    var i = 0;
                    for(var sz = size; i < sz ; i++) {
                        const innerItems = [];
                        innerItems.push(<SectionElement
                                                key={i}
                                                index={i}
                                                sectionBox={sectionBox} 
                                                updateSectionBox={updateSectionBox}
                                                field={fields[i]} 
                                                isMainPage={"no"} 
                                                starterNumber={sectionNumber}
                                                updateSectionNumber={updateSectionNumber}
                                                errors={errors}
                                                updateErrors={updateErrors}
                                                />);
                        items.push( <div key={i} className="row">{innerItems}</div>);
                    }
                    items.push(<div key={i + 1} className="row"><LoginButton key={i + 1} isAdditional={false} title={"Submit"}></LoginButton></div>);
                    return items;
                })()}
            </div>
            <div key={1} className="row"><LoginButton key={1} isAdditional={true} title={section_label === "Login" ? "Sign Up": "Login"}></LoginButton></div>
            </form>
            </div>
            
        </Grid>
    );
};



export default StarterBoxCont;