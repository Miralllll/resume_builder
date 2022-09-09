import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardActionArea, colors, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import theme from "../Theme/Theme";
import background from "./background.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Paper,
  CardContent,
} from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { Document, Page } from "react-pdf";
import ProfileCard from "./ProfileCard";
import document from "./document.jpg";
import add from "./add.jpg";
import { faBlackboard } from "@fortawesome/free-solid-svg-icons";
import ResumePopup from '../ResumePopup/ResumePopup';
import ResumePopupForm from '../ResumePopup/ResumePopupForm';

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
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#202020",
    marginBottom: "24px",
    marginTop: "24px",
    maxWidth: "100%",
  },
  documentContTitle: {
    frontWeight: 20,
    bottom: 0,
    top: "auto",
    textAlign: "center",
  },
  card: {
    maxWidth: "100%",
    height: "-webkit-fill-available",
  },
  media: {
    height: 200,
    padding: "2%",
    color: "black",
  },
  header: {
    // display: "flex",
    // justifyContent: "center",
    fontSize: 13,
  },
  footer: {
    fontSize: 10,
  },
}));

function Profile({ url }) {
  const classes = useStyles();
  const history = useHistory();
  const [isAuth, updateIsAuth] = useState(false);
  const [isLoading, updateIsLoading] = useState(true);
  const [profileData, updateProfileData] = useState({});
  const [removePressed, updateRemovePressed] = useState([false, -1]);
  const [openPopup, updateOpenPopup] = useState(false);

  useEffect(() => {
    if (
      !removePressed ||
      removePressed[0] === false ||
      removePressed[1] === -1
    ) {
      return;
    }
    try {
      deleteResumes();
      var list = profileData.docs;
      list.slice(0, removePressed[1]);
      var dataCopy = profileData;
      dataCopy.docs = [
        ...list.slice(0, removePressed[1]),
        ...list.slice(removePressed[1] + 1),
      ];
      updateProfileData(dataCopy);
      updateRemovePressed(false);
    } catch  (err) {
      console.log(err);
      updateIsAuth(false);
      updateIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removePressed]);

  const getResumes = async () => {
    try {
      const res = await fetch(`https://r-esume-b-uilder-api.herokuapp.com/resumes`, {
        method: "POST",
        credentials: "include",
        // headers: { "Content-Type": "application/json" },
      });
      if (res.status === 401) {
        history.push(`/auth/0`);
      } else {
        const data = await res.json();
        updateProfileData(data);
        updateIsLoading(false);
        updateIsAuth(true);
      }
    } catch (err) {
      console.log(err);
      updateIsAuth(false);
      updateIsLoading(false);
    }
  };

  const deleteResumes = async () => {
    try {
      const res = await fetch(`http://localhost:3050/resumes/delete`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          title: profileData.docs[removePressed[1]].title,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.status === 200) {
      } else {
        history.push(`/auth/0`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addResume = () => {
    updateOpenPopup(true);
  }

  useEffect(() => {
    // if (isLoading === false) return;
    updateIsLoading(true);
    getResumes();
  }, []);

  const handleLogOut = async () => {
    try {
      const res = await fetch(`http://localhost:3050/logout`, {
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
          {/* {!isLoading && ( */}
          <>
            <Box className={classes.welcomeCont}>
              {!isLoading && (
                <Box>{`Welcome,\n ${profileData.user_name}!`}</Box>
              )}
            </Box>
            <Container maxWidth="lg" className={classes.titleCont}>
              <Toolbar className={classes.header}>
                <Typography
                  align="center"
                  variant="h4"
                  className={classes.documentContTitle}
                >
                  YOUR RESUMES
                </Typography>
              </Toolbar>
            </Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={2}>
                <div onClick={addResume}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={classes.header}
                      >
                        &nbsp;&nbsp;
                      </Typography>
                      <CardMedia
                        className={classes.media}
                        // height="140"
                        image={add}
                        title="Add New Resume"
                      />
                      <div className={classes.footer}>
                        <Typography>&nbsp;&nbsp;</Typography>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </div>
              </Grid>
              {profileData.docs.map((doc, index) => (
                <Grid key={index} item xs={12} sm={6} md={2}>
                  <ProfileCard
                    key={index}
                    profileData={profileData}
                    index={index}
                    classes={classes}
                    isLaoding={isLoading}
                    imageFile={document}
                    removePressed={removePressed}
                    updateRemovePressed={updateRemovePressed}
                  ></ProfileCard>
                </Grid>
              ))}
            </Grid>
          </>
          {/* )} */}
        </div>
      )}
      <ResumePopup title="New Resume" openPopup={openPopup} 
      updateOpenPopup={updateOpenPopup}>
        <ResumePopupForm>
      </ResumePopupForm>
      </ResumePopup>
    </>
  );
}

export default Profile;
