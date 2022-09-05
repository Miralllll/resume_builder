import { React, useEffect } from "react";

function Profile({ sectionNumber, updateSectionNumber, section_label }) {
  const doIt = async () => {
    console.log("here");
    try {
      const res = await fetch(`https://r-esume-b-uilder-api.herokuapp.com/resumes`, {
        method: "POST",
        credentials: "include",
        // headers: { "Content-Type": "application/json" },
      });
      // const data = res.json();
      console.log(res.status);
      // console.log(data);
      if (res.status === 401) {
        updateSectionNumber(0);
        console.log(sectionNumber);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    doIt();
  });

  return (
    <>
      <label></label>
    </>
  );
}

export default Profile;
