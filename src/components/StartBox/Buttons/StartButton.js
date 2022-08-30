import React, {useState, useEffect} from "react";
import "../../Button/button.css";
import { Tooltip } from "@material-ui/core";
import { Grid  } from '@material-ui/core';

function StartButton({title, dataKey, sectionNumber, updateSectionNumber, isMainPage, isPageChanged, updateIsPageChanged}) {
    const getIndex = (title) => {
        switch(title) {
            case "Login": return 1;
            case "Sign Up": return 2;
            case "Continue As a Guest": return 3;
            default:
                return null;
        };
    };

    console.log("my button id" + dataKey);

    // dataKey = getIndex(title);

    const [key, ] = useState(dataKey);
    const [isActive, setIsActive] = useState(false);

    const handleSectionButton = (dataKey) => {
        setIsActive(true);
        updateSectionNumber(dataKey);
        console.log("my button id" + dataKey);
        // updateSectionNumber(dataKey);
    };

    useEffect(() => {
        if(sectionNumber !== dataKey) {
            setIsActive(false);
        }
    }, [sectionNumber]);

    return <div className={`mt-3 ${ isMainPage === "yes" ? "col-12" : "mb-3 col-8"}`}>
        {console.log(dataKey)}
            <Grid container justifyContent="center">
                {/* <Tooltip className={title}> */}
                    <button className = {`mi-btn starter-button logo-title ${ isMainPage === "yes" ? "" : "starter-next"}`} onClick={() => handleSectionButton(key)}>
                        <h4 className="logo-title">{title}</h4>
                    </button>
                {/* </Tooltip> */}
            </Grid>
        </div>
    ;
}

export default StartButton;