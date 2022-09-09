import React, { useEffect } from "react";
import "./navBar.css";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffdf6c",
    color: "#202020",
  },
}));

function NavBar({ isAuth }) {
  const history = useHistory();
  const classes = useStyles();

  const goOnMainPage = () => {
    history.push(`/`);
  };

  const handleLogOut = async () => {
    try {
      const res = await fetch(`https://r-esume-b-uilder-api.herokuapp.com/logout`, {
        method: "GET",
        withCredntials: true,
        credentials: "include",
      });
      if (res.status === 200) {
        history.push(`/`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AppBar
        className={classes.appBar}
        position="static"
        onClick={goOnMainPage}
      >
        <Toolbar>
          <Grid id={`button `} container justifyContent="flex-start">
            <Typography variant="h5" onClick={goOnMainPage}>
              &nbsp;| RESUME | BUILDER |
            </Typography>
          </Grid>
          {isAuth 
          // && ((window.location.href.indexOf("resumes") !== -1) || (window.location.href.indexOf("creator") !== -1)) 
          && (
            // <li>
            <Grid id={`button `} container justifyContent="flex-end">
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
            // </li>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
