import React, { useState } from "react";
import SectionElement from "../SectionElement/SectionElement";
import AuthButton from "./Buttons/AuthButton";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./starter.css";

const StarterBoxCont = ({
  sectionInfo,
  fields,
  size,
  section_label,
}) => {
  const [sectionBox, updateSectionBox] = new useState(sectionInfo);
  const [errors, updateErrors] = useState({ email: "", password: "", name: "" });
  const history = useHistory();
  const handleChange = async (e) => {
    if (e.target.id === "button Submit") {
      var errs = errors;
      errs.email = "";
      errs.password = "";
      errs.name = "";
      updateErrors(errs);
      const email = sectionBox.email;
      const password = sectionBox.password;
      const name = sectionBox.name;
      try {
        var lowerCased = section_label.toLowerCase().replace(/ /g, "");
        const res = await fetch(`http://localhost:3050/${lowerCased}`, {
          method: "POST",
          body: JSON.stringify({ email: email, password: password, name: name }),
          headers: { "Content-Type": "application/json"},
          withCredntials: true,
          credentials: "include",
        });
        const data = await res.json();
        if (data.errors) {
          updateErrors(data.errors);
        }
        if (data.user) {
          // relocation on main page to login
          history.push("/myresumes");
        }
      } catch (err) {
        console.log(err);
      }
    } else if (e.target.id.startsWith("button")) {
      history.push(`/auth/${section_label === "Login" ? 1 : 0}`)
    }
  };

  return (
    <Grid container style={{ backgroundColor: "transparent" }}>
      <div className="container-second">
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
                  <AuthButton
                    key={i + 1}
                    isAdditional={false}
                    title={"Submit"}
                  ></AuthButton>
                </div>
              );
              return items;
            })()}
          </div>
          <div key={1} className="row">
            <AuthButton
              key={1}
              isAdditional={true}
              title={section_label === "Login" ? "Sign Up" : "Login"}
            ></AuthButton>
          </div>
        </form>
      </div>
    </Grid>
  );
};

export default StarterBoxCont;
