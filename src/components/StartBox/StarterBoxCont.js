import React, { useState, useEffect, useRef } from "react";
import SectionElement from "../SectionElement/SectionElement";
import LoginButton from "./Buttons/LoginButton";
import { Grid  } from '@material-ui/core';
import './starter.css';

const StarterBoxCont = ({starterNumber, updateSectionNumber, sectionInfo, updateSectionInfo, fields, size, section_label, isPageChanged, updateIsPageChanged}) => {
    const firstUpdate = useRef(true);
    const [sectionBox, updateSectionBox] = new useState(sectionInfo);

    console.log(JSON.stringify(sectionInfo) + JSON.stringify(sectionBox) + " ");

    const handleChange = (e) => {
        console.log("form alart");
        console.log(e.target.type === "button");
        console.log(sectionBox.email + " " + sectionBox.password);
    };

    return (
        <Grid container justifyContent="center" alignItems="center" className="card-wrapper" style={({backgroundColor: "transparent"})}>
            <div className="container-second">
            {/* <Grid container justifyContent="center" className="mb-1 container-second"><h2>{section_label}</h2></Grid> */}
            <form onClick={handleChange}>
            <div className="starter-form">
                <div className=" mb-4 col-12"><Grid container justifyContent="center"><h2>{section_label}</h2></Grid></div>
                {console.log("starterBOxContainer")}
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
                                                starterNumber={starterNumber}
                                                updateSectionNumber={updateSectionNumber}
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