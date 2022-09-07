import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import theme from "../Theme/Theme";
import background from "./background.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Card, CardActions, CardHeader, CardMedia } from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffffff",
  },
  welcomeCont: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffdf6c",
    fontSize: "4rem",
    marginTop: "24px",
  },
  titleCont: {
    display:"flex",
    justifyContent:"center",
    backgroundColor: "#202020",
    marginBottom: "24px",
    marginTop: "24px",
    maxWidth: "100%",
  },
  documentContTitle: {
    frontWeight: 500,
    bottom: 0,
    top: "auto",
    textAlign:"center",
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  header: {
    display:"flex",
    justifyContent:"center",
  }
}));

function Profile({ url }) {
  const classes = useStyles();
  const history = useHistory();
  const [isAuth, updateIsAuth] = useState(false);
  const user_name = "Mari";

  const getResumes = async () => {
    console.log("here");
    try {
      const res = await fetch(`https://r-esume-b-uilder-api.herokuapp.com/resumes`, {
        method: "POST",
        credentials: "include",
        // headers: { "Content-Type": "application/json" },
      });
      console.log(res.status);
      if (res.status === 401) {
        history.push(`/auth/0`);
      } else {
        updateIsAuth(true);
      }
    } catch (err) {
      console.log(err);
      updateIsAuth(false);
    }
  };

  useEffect(() => {
    getResumes();
  });

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
        history.push(`/`);
      } else console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isAuth && (
        <div>
          {/* <li>
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
          </li> */}
          <Box className={classes.welcomeCont}>
            <Box>{`${user_name}`}</Box>
          </Box>
          <Container maxWidth="lg" className={classes.titleCont}>
            <Toolbar className={classes.header}>
              <Typography align="center" variant="h4" className={classes.documentContTitle}>YOUR RESUMES</Typography>
            </Toolbar>
          </Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardHeader title="Shrimp and Chorizo Paella" />
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={`${background}`}
                />
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export default Profile;
