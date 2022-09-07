import React, { useState, useEffect, useRef } from "react";
import StartBox from "../StartBox/StartBox";
import ButtonsBox from "../StartBox/ButtonsBox/ButtonsBox";
import formJSON from "../../JSONData/starterFormElements.json";
import WorkSheet from "../WorkSheet/WorkSheet";
import Profile from "../Profile/Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const StartBoxWrapper = () => {
  var list = [];
  formJSON.map((sec) => {
    const { section_label } = sec ?? {};
    list.push(section_label);
    return list;
  });

  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="starter-work-sheet mt-5">
            <ButtonsBox section_labels={list}></ButtonsBox>
          </div>
        </Route>
        <Route path="/auth/:id">
          {console.log("inside log")}
          <StartBox></StartBox>
        </Route>
        <Route
          path="/myresumes"
          render={({ match: { url } }) => (
            <>
              <Profile url={url}></Profile>
            </>
          )}
        />
        <Route path="/aguest">
          <WorkSheet />
        </Route>
      </Switch>
    </>
  );
};

export default StartBoxWrapper;
