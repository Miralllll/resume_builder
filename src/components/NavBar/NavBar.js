import React from "react";
import "./navBar.css";
import { Grid } from "@material-ui/core";

function NavBar({ sectionNumber, updateSectionNumber }) {
  const goOnMainPage = () => {
    updateSectionNumber(-1);
  };

  const handleLogOut = async () => {
    console.log("logout");
    try {
      const res = await fetch(`http://localhost:3050/logout`, {
        method: "GET",
        withCredntials: true,
        credentials: "include",
      });
      console.log("here" + res.status);
      if (res.status === 200) {
        updateSectionNumber(-1);
      } else console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar">
      <div>
        <li>
          <Grid container justifyContent="center" onClick={goOnMainPage}>
            <div>
              <h3 className="logo-title">&nbsp;| RESUME | BUILDER |</h3>
            </div>
          </Grid>
        </li>
      </div>
      {sectionNumber === 2 && (
        <div>
          <li>
            <Grid id={`button `} container justifyContent="center">
              <button
                id={`button `}
                type="button"
                className={`mi-btn`}
                onClick={handleLogOut}
              >
                <h4 id={`button Log Out`} type="button" className="logo-title">
                  Log Out
                </h4>
              </button>
            </Grid>
          </li>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
