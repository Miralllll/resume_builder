import React from "react";
import "../../Button/button.css";
import { Grid } from "@material-ui/core";

function StartButton({ title, isAdditional }) {
  return (
    <Grid container justifyContent="center">
      <div
        className={`mb-3 mt-3 ${isAdditional === true ? "col-12" : "col-8"}`}
      >
        <Grid id={`button ${title}`} container justifyContent="center">
          {/* <Tooltip className={title}> */}
          <button
            id={`button ${title}`}
            type="button"
            style={{
              backgroundColor: `${isAdditional === true ? "#707070" : ""}`,
              color: `${isAdditional === true ? "#ffffff" : ""}`,
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
