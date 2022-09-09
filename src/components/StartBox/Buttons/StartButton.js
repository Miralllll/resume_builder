import React, { useState, useEffect } from "react";
import "../../Button/button.css";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function StartButton({ title, isMainPage }) {
  function getCurrentDate(separator = "") {
    var newDate = Date().toLocaleString();
    return [
        new Date(newDate).getUTCFullYear(),
        new Date(newDate).getUTCMonth(),
        new Date(newDate).getUTCDate(),
        new Date(newDate).getUTCHours(),
        new Date(newDate).getUTCMinutes(),
      ].join(".");
  }

  // eslint-disable-next-line no-unused-vars
  const getPropDirection = (url) => {
    switch (url) {
      case "login":
        return "auth/0";
      case "signup":
        return "auth/1";
      case "aguest":
        return `creator/${ getCurrentDate()}`;
      default:
        return url;
    }
  };

  // dataKey = getIndex(title);
  const history = useHistory();

  const handleSectionButton = () => {
    var direction = title.toLowerCase().split(" ").splice(-2).join("");
    history.push(`/${getPropDirection(direction)}`);
  };

  return (
    <div className={`mt-3 ${isMainPage === "yes" ? "col-12" : "mb-3 col-8"}`}>
      <Grid container justifyContent="center">
        <button
          className={`mi-btn starter-button logo-title ${
            isMainPage === "yes" ? "" : "starter-next"
          }`}
          onClick={() => handleSectionButton()}
        >
          <h4 className="logo-title">{title}</h4>
        </button>
      </Grid>
    </div>
  );
}

export default StartButton;
