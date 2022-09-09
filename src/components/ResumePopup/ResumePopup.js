import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Grid  } from '@material-ui/core';
import { styled } from "@mui/material/styles";
import { color } from "@mui/system";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// .MuiInputBase-input, .MuiSvgIcon-root {
//     /* color: white !important; */
// }

export default function ResumePopup(props) {
  const { title, children, openPopup, updateOpenPopup } = props;

  const handleClose = () => {
    updateOpenPopup(false);
  };
  return (
    <>
      <BootstrapDialog open={openPopup}>
        <DialogTitle sx={{ m: 0, p: 2 }} style={({color: "black"})}>
            <Grid container justifyContent="center">{title}</Grid>
          {handleClose ? (
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </BootstrapDialog>
    </>
  );
}
