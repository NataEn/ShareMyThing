import React from "react";
import clsx from "clsx";
import { useLocation, Link } from "react-router-dom";
import { useStyles } from "./ListItemStyles";
import RequestModal from "../RequestModal/RequestModal";
import PropTypes from "prop-types";
import { List, ListItem, Button, Typography } from "@material-ui/core";

/**
 *
 * @description {Function} ListItemShared function react component for displaying the shared item data
 * @returns react component
 */

export default function ListItemShared({ id, item }) {
  const classes = useStyles();
  const location = useLocation();
  const { description, lastUsed, inUseBy, imgURL, name } = item;
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    if (location.pathname === "/") {
      e.nativeEvent.stopImmediatePropagation();
    }
    setOpen(true);
  };

  const handleClose = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    console.log("clicked close modal");
    setOpen(false);
  };
  console.log(item);

  return (
    <ListItem>
      <div className={classes.container}>
        <Link
          className={classes.link}
          to={{
            pathname: `/items/${id}`,
            state: item,
          }}
          key={id}
        >
          <img src={imgURL} alt="item" className={classes.image} />
        </Link>

        <List className={classes.description}>
          <Typography variant={"subtitle1"}>{name}</Typography>
          <ListItem className={classes.description} key={`${id}-description`}>
            description:{description}
          </ListItem>
          <ListItem className={classes.description} key={`${id}-lastUsed`}>
            last used:{lastUsed}
          </ListItem>
          <ListItem className={classes.description} key={`${id}-inUseBy`}>
            in use by:{inUseBy}
          </ListItem>
          <ListItem className={classes.description} key={`${id}-btns`}>
            {/* <Button
              className={[classes.releaseBtn, classes.btn]}
              size={"small"}
            >
              Release
            </Button> */}
            <Button
              className={clsx(classes.requestBtn, classes.btn)}
              size={"small"}
              onClick={(e) => {
                handleOpen(e);
                console.log("clicked button");
              }}
            >
              Request
            </Button>
          </ListItem>
          <RequestModal
            open={open}
            handleClose={handleClose}
            from={"Jack"}
            to={"David"}
          />
        </List>
      </div>
    </ListItem>
  );
}

ListItemShared.propTypes = {
  imgURL: PropTypes.string,
  description: PropTypes.string,
  lastUsed: PropTypes.string,
  inUseBy: PropTypes.string,
  publishedBy: PropTypes.string,
};
