import React, { useState, useEffect, useRef } from "react";
import SectionElement from "../SectionElement/SectionElement";
import LoginButton from "./Buttons/LoginButton";
import { Grid } from "@material-ui/core";
import "./starter.css";

const StarterBoxCont = ({
  sectionNumber,
  updateSectionNumber,
  sectionInfo,
  fields,
  size,
  section_label,
}) => {
  const [sectionBox, updateSectionBox] = new useState(sectionInfo);
  const [errors, updateErrors] = useState({ email: "", password: "" });

  const handleChange = async (e) => {
    if (e.target.id === "button Submit") {
      var errs = errors;
      errs.email = "";
      errs.password = "";
      updateErrors(errs);
      console.log(sectionNumber);
      const email = sectionBox.email;
      const password = sectionBox.password;
      try {
        var lowerCased = section_label.toLowerCase().replace(/ /g, "");
        console.log(lowerCased);
        const res = await fetch(`http://localhost:3040/${lowerCased}`, {
          method: "POST",
          body: JSON.stringify({ email: email, password: password }),
          headers: { "Content-Type": "application/json" },
          withCredntials: true,
          credentials: "include",
        });
        const data = await res.json();
        console.log(data);
        if (data.errors) {
          updateErrors(data.errors);
          console.log(sectionBox);
          // console.log(sectionBox);
        }
        console.log(errors);
        if (data.user) {
          // relocation on main page to login
        }
      } catch (err) {
        console.log(err);
      }
    } else if (e.target.id.startsWith("button")) {
      updateSectionNumber(sectionNumber === 1 ? 0 : 1);
    }
  };

  return (
    <Grid container style={{ backgroundColor: "transparent" }}>
      <div className="container-second">
        {console.log(errors)}
        <form onClick={handleChange} autoComplete="none">
          <div className="starter-form">
            <div key={section_label} className=" mb-4 col-12">
              <Grid container justifyContent="center">
                <h2>{section_label}</h2>
              </Grid>
            </div>

            {(() => {
              const items = [];
              var i = 0;
              for (var sz = size; i < sz; i++) {
                const innerItems = [];
                innerItems.push(
                  <SectionElement
                    key={i + " " + section_label}
                    index={i}
                    sectionBox={sectionBox}
                    updateSectionBox={updateSectionBox}
                    field={fields[i]}
                    isMainPage={"no"}
                    starterNumber={sectionNumber}
                    updateSectionNumber={updateSectionNumber}
                    errors={errors}
                    updateErrors={updateErrors}
                  />
                );
                items.push(
                  <div key={i} className="row">
                    {innerItems}
                  </div>
                );
              }
              items.push(
                <div key={i + 1} className="row">
                  <LoginButton
                    key={i + 1}
                    isAdditional={false}
                    title={"Submit"}
                  ></LoginButton>
                </div>
              );
              return items;
            })()}
          </div>
          <div key={1} className="row">
            <LoginButton
              key={1}
              isAdditional={true}
              title={section_label === "Login" ? "Sign Up" : "Login"}
            ></LoginButton>
          </div>
        </form>
      </div>
    </Grid>
  );
};

export default StarterBoxCont;
