import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import { Grid } from "@material-ui/core";
import StartButton from "../Buttons/StartButton";
import "../../Button/button.css";
import "./buttonsBox.css";
// import logo from './image.png';
const logo = require("./image.png");

function ButtonsBox({
  section_labels,
  sectionNumber,
  updateSectionNumber,
  isPageChanged,
  updateIsPageChanged,
}) {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={3}>
      <Grid item ys={9} sm={7} md={6} lg={6} xl={6}>
        <Grid container justifyContent="center" alignItems="center">
          <ProgressiveImage
            src={logo}
            placeholder={logo}
            style={{ width: "100%" }}
          >
            {(src, loading) => (
              <img
                className={`child-starter-img ${
                  loading ? " loading" : " loaded"
                }`}
                src={src}
                alt="Logo"
                min-width="100%"
              />
            )}
          </ProgressiveImage>
        </Grid>
      </Grid>
      <Grid item ys={9} sm={7} md={6} lg={6} xl={6}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            {console.log(section_labels)}
            <Grid container justifyContent="center" spacing={3}>
              {section_labels.map((value, index, array) => {
                return (
                  <Grid item key={index} xs={8}>
                    <StartButton
                      key={index}
                      title={value}
                      dataKey={index}
                      sectionNumber={sectionNumber}
                      updateSectionNumber={updateSectionNumber}
                      isMainPage={"yes"}
                    ></StartButton>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ButtonsBox;
