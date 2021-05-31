import React from "react";
import clsx from "clsx";
import { useStyles } from "./ListItemStyles";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

/**
 *
 * @description {Function} ListItemShared function react component for displaying the shared item in the main list
 * @returns react component
 */

export default function ListItemShared({
  id,
  imgURL,
  description,
  lastUsed,
  inUseBy,
  publishedBy,
}) {
  const classes = useStyles();
  debugger;
  return (
    <Link
      className={classes.link}
      to={{
        pathname: `/items/${id}`,
        state: { imgURL, description, lastUsed, inUseBy, publishedBy },
      }}
    >
      <ListItem>
        <img src={imgURL} alt="item" className={classes.image} />
        <List className={classes.description}>
          <ListItem className={classes.description} key={`${id}-description`}>
            description:{description}
          </ListItem>
          <ListItem className={classes.description} key={`${id}-lastUsed`}>
            last used:{lastUsed}
          </ListItem>
          <ListItem className={classes.description} key={`${id}-inUseBy`}>
            in use by:{inUseBy}
          </ListItem>
          <ListItem className={classes.description} key={`${id}-publishedBy`}>
            published by:{publishedBy}
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
                e.preventDefault();
                console.log("clicked button");
              }}
            >
              Request
            </Button>
          </ListItem>
        </List>
      </ListItem>
      <Divider />
    </Link>
  );
}

ListItemShared.propTypes = {
  imgURL: PropTypes.string,
  description: PropTypes.string,
  lastUsed: PropTypes.string,
  inUseBy: PropTypes.string,
  publishedBy: PropTypes.string,
};
