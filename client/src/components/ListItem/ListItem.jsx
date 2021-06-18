import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useLocation, Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
import { useStyles } from "./ListItemStyles";
import RequestModal from "../RequestModal/RequestModal";
import { List, ListItem, Button, Typography } from "@material-ui/core";

/**
 * @name ListItemShared
 * @description display shared item data
 * @returns {JSX.Element} react component
 */
//TODO: debug animation on hover and make the link to a translateY change from
export default function ListItemShared({ id, item }) {
  const classes = useStyles();
  const location = useLocation();
  const { description, lastUsed, inUseBy, imgURL, name, images } = item;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setShow(false);
    }
  }, []);

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    console.log("clicked close modal");
    setOpen(false);
  };

  const encodeBase64Img = (buffer) => {
    return `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`;
  };

  return (
    <>
      <ListItem className={!show ? classes.listItemContainer : ""}>
        <div className={classes.container}>
          <img
            src={imgURL ? imgURL : images[0]}
            alt="item"
            className={classes.image}
          />

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

              {show && (
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
              )}
            </ListItem>
            <RequestModal
              open={open}
              handleClose={handleClose}
              from={"Jack"}
              to={"David"}
            />
          </List>
        </div>
        {!show && (
          <Link
            className={classes.link}
            to={{
              pathname: `/items/${id}`,
              state: item,
            }}
            key={id}
          >
            <h4 className={classes.h4}>read more . . .</h4>
          </Link>
        )}
      </ListItem>
      <Divider />
    </>
  );
}

ListItemShared.propTypes = {
  imgURL: PropTypes.string,
  description: PropTypes.string,
  lastUsed: PropTypes.string,
  inUseBy: PropTypes.string,
  publishedBy: PropTypes.string,
};
