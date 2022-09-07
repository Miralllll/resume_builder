import React, { useEffect } from "react";
import "./navBar.css";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffdf6c",
    color: "#202020",
  },
}));

function NavBar() {
  const history = useHistory();
  const classes = useStyles();

  const goOnMainPage = () => {
    history.push(`/`);
  };

  return (
    <AppBar className={classes.appBar} position="static" onClick={goOnMainPage}>
      <Toolbar>
        <Typography variant="h5" onClick={goOnMainPage}>
          &nbsp;| RESUME | BUILDER |
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
