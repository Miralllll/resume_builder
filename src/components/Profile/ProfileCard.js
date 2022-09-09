import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CardActionArea, CardContent, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Paper,
} from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { Document, pdfjs, Page } from "react-pdf";
import { AiFillCloseCircle } from "react-icons/ai";
import Spinner from "../Spinner/Spinner";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ProfileCard = ({
  profileData,
  index,
  classes,
  isLoading,
  imageFile,
  updateRemovePressed,
}) => {
  const history = useHistory();
  const handleDelete = () => {
    updateRemovePressed([true, index]);
  };

  const handleClick = () => {
    history.push(`/creator/${document.title}`);
  };

  const document = profileData.docs[index];
  return (
    <Card className={classes.card} onClick={handleClick}>
      {/* <CardActionArea> */}
      <CardMedia
        className={classes.media}
        // height="140"
        image={imageFile}
        title="Document Image"
      >
        <Grid container justifyContent="flex-end">
          <ClearIcon onClick={(e) => {e.stopPropagation(); handleDelete();}}></ClearIcon>
        </Grid>
      </CardMedia>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.header}
          >
            {`${document.title}`}
          </Typography>
          {(() => {
            if (isLoading) {
              return (
                <div className="back-container">
                  <Spinner />
                </div>
              );
            }
            if (document === undefined)
              return <div className="error-latex">{}</div>;
          })()}
          <Typography className={classes.footer}>
            {[
              "Last Update :",
              [
                new Date(document.createdDate).getUTCFullYear(),
                new Date(document.createdDate).getUTCMonth(),
                new Date(document.createdDate).getUTCDate(),
              ].join("."),
              [
                new Date(document.createdDate).getUTCHours(),
                new Date(document.createdDate).getUTCMinutes(),
              ].join(":"),
            ].join("  ")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProfileCard;
