import React from "react";
import "../../Button/button.css";
import { Grid } from "@material-ui/core";

function AuthButton({ title, isAdditional, typeBT }) {
  return (
    <Grid container justifyContent="center">
      <div
        className={`mb-3 mt-3 ${isAdditional === true ? "col-12" : "col-8"}`}
      >
        <Grid id={`button ${title}`} container justifyContent="center">
          <button
            id={`button ${title}`}
            type={typeBT? typeBT : "button"}
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
        </Grid>
      </div>
    </Grid>
  );
}

export default AuthButton;
