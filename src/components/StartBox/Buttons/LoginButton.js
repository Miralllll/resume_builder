import React, { useState, useEffect } from "react";
import "../../Button/button.css";
import { Tooltip } from "@material-ui/core";
import { Grid } from "@material-ui/core";

function StartButton({ title, isAdditional }) {
  return (
    <Grid container justifyContent="center">
      <div
        className={`mt-3 ${isAdditional === true ? "col-12" : "mb-3 col-8"}`}
      >
        <Grid id={`button ${title}`} container justifyContent="center">
          {/* <Tooltip className={title}> */}
          <button
            id={`button ${title}`}
            type="button"
            style={{
              backgroundColor: `${isAdditional === true ? "#707070" : ""}`,
            }}
            className={`mi-btn logo-title ${
              isAdditional === true ? "starter-button" : "starter-next"
            }`}
          >
            <h4 id={`button ${title}`} type="button" className="logo-title">
              {title}
            </h4>
          </button>
          {/* </Tooltip> */}
        </Grid>
      </div>
    </Grid>
  );
}

export default StartButton;
