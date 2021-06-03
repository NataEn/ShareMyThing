import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { useStyles } from "./RequestModalStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import ReplyIcon from "@material-ui/icons/Reply";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

/**
 * @description shows from whom and to whom the item is transferred
 * @param {Boolean} open display state of modal
 * @param {Function} handleClose callback function on pressing modal buttons
 * @param {String} from person who has the item
 * @param {String} to person who receives the item
 * @returns JSX element
 */
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
RequestModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  from: PropTypes.string,
  to: PropTypes.string,
};
// export default RequestModal;
