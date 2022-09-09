import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Input from "../SectionElement/Elements/Input";
import Button from "../StartBox/Buttons/AuthButton";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const { someInput } = require("../../Data/default");

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export default function ResumePopupForm() {
  const [submited, updateSubmited] = useState("");
  const [error, updateErrors] = useState({ title: "" });
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    createResume();
  };

  const createResume = async () => {
    try {
      const res = await fetch(`http://localhost:3050/resumes/add`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          title: submited,
          formInfo: JSON.stringify({
            "General Information": [{ 1: {} }],
            "Work Experience": [{ 1: {} }],
            Education: [{ 1: {} }],
            Projects: [{ 1: {} }],
            Awards: [{ 1: {} }],
            Skills: [{ 1: {} }],
          }),
          document: someInput,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.errors) {
        updateErrors(data.errors);
      }
      if (data.title) {
        // relocation on main page to login
        history.push(`/creator/${data.title}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Input
            field_id="title"
            field_label="Resume Name"
            field_placeholder="Enter resume name"
            field_value=""
            display_full_line={true}
            updateSectionElem={updateSubmited}
            isMainPage="no"
            errors={error}
          />
        </Grid>
        <Grid item xs={12}>
          <div>
            <Button typeBT={"submit"} title="Submit" isAdditional="no" />
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
