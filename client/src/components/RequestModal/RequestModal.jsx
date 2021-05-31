import React from "react";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import ReplyIcon from "@material-ui/icons/Reply";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary1Color,
    color: "white",
    padding: "0 2rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { textAlign: "center" },
  flexColumn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  icon: {
    transform: "scale(-1,-1)",
    color: theme.palette.primary2Color,
    fontSize: "5rem",
  },
  name: { textDecoration: "underline" },
  btn: {
    margin: "0",
    padding: theme.spacing(0.5),
  },
  confirmBtn: {
    backgroundColor: theme.palette.primary2Color,

    color: "white",
    "&:hover": { color: theme.palette.primary2Color, backgroundColor: "white" },
  },
  closeBtn: { "&:hover": { color: "#f50057", backgroundColor: "white" } },
}));

export default function RequestModal({ open, handleClose, from, to }) {
  const classes = useStyles();
  const location = useLocation();
  console.log(location);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Fade in={open}>
        <div className={classes.container}>
          <DialogTitle id="alert-dialog-title" className={clsx(classes.title)}>
            Transfer Item
          </DialogTitle>
          <DialogContent className={clsx(classes.modal)}>
            <div className={classes.flexColumn}>
              <Typography className={classes.name} variant={"h5"}>
                {from}
              </Typography>
              <p>from</p>
            </div>
            <ReplyIcon className={classes.icon} />
            <div className={classes.flexColumn}>
              <Typography className={classes.name} variant={"h5"}>
                {to}
              </Typography>
              <p>to</p>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClose}
              size={"small"}
              className={clsx(classes.btn, classes.closeBtn)}
            >
              close
            </Button>

            <Button
              variant="contained"
              onClick={handleClose}
              size={"small"}
              className={clsx(classes.btn, classes.confirmBtn)}
            >
              confirm
            </Button>
          </DialogActions>
        </div>
      </Fade>
    </Dialog>
  );
}
