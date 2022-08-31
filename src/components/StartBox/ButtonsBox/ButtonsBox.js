import React, { useState, useEffect, useRef} from "react";
import { Grid  } from '@material-ui/core';
import StartButton from '../Buttons/StartButton';
import "../../Button/button.css";
import "./buttonsBox.css";
// import logo from './image.png';
const logo = require('./image.png');

function ButtonsBox({section_labels, sectionNumber, updateSectionNumber, isPageChanged, updateIsPageChanged}) {

    return <Grid container justifyContent="center" alignItems="center" spacing={3} style={({height:"100%"})}>
        <Grid item ys={8} style={({height:"50%"})}>
            <Grid container justifyContent="center" alignItems="center" style={({height:"100%"})}>
                <img style={({height:"100%"})}
                    className src={logo} alt="Logo"
                />
            </Grid>
        </Grid>
        <Grid item ys={8} style={({height:"50%"})}>
        <Grid container alignItems="center" justifyContent="center" style={({height: "100%"})}> 
        <Grid item style={({height: "auto"})}>
        {console.log(section_labels)}
            <Grid container justifyContent="center" spacing={3}>
                {section_labels.map((value, index, array) => {
                    return <Grid key={index} item xs={8}>
                            <StartButton
                            key={index} 
                            title={value}
                            dataKey={index}
                            sectionNumber={sectionNumber} 
                            updateSectionNumber={updateSectionNumber} 
                            isMainPage={"yes"}
                            ></StartButton>
                    </Grid>
                })}
            </Grid>
            </Grid>
        </Grid>
        </Grid>
    </Grid>
    ;
}

export default ButtonsBox;