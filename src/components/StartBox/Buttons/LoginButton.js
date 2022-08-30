import React, {useState, useEffect} from "react";
import "../../Button/button.css";
import { Tooltip } from "@material-ui/core";
import { Grid  } from '@material-ui/core';

function StartButton({title, isAdditional}) {


    const handleSectionButton = (e) => {
        console.log("submit id" + e);
        // updateSectionNumber(dataKey);
    };

    return <Grid container justifyContent="center">
        <div className={`mt-3 ${ isAdditional === true ? "col-12" : "mb-3 col-8"}`}>
            <Grid container justifyContent="center">
                {/* <Tooltip className={title}> */}
                    <button type="button" style={({backgroundColor: `${ isAdditional === true ? "#707070" : ""}`})}
                    className = {`mi-btn starter-button logo-title ${ isAdditional === true ? "" : "starter-next"}`}>
                        <h4 className="logo-title">{title}</h4>
                    </button>
                {/* </Tooltip> */}
            </Grid>
        </div> 
        </Grid>
    ;
}

export default StartButton;