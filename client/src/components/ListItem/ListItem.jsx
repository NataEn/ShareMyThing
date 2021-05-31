import React from "react";
import { useStyles } from "./ListItemStyles";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

/**
 *
 * @description {Function} ListItemShared function react component for displaying the shared item in the main list
 * @returns react component
 */

export default function ListItemShared({
  imgURL,
  description,
  lastUsed,
  inUseBy,
  publishedBy,
}) {
  const classes = useStyles();
  return (
    <>
      <ListItem className={classes.container}>
        <img src={imgURL} alt="item" className={classes.image} />
        <List className={classes.description}>
          <ListItem className={classes.description}>
            description:{description}
          </ListItem>
          <ListItem className={classes.description}>
            last used:{lastUsed}
          </ListItem>
          <ListItem className={classes.description}>
            in use by:{inUseBy}
          </ListItem>
          <ListItem className={classes.description}>
            published by:{publishedBy}
          </ListItem>
          <ListItem className={classes.description}>
            <Button
              className={[classes.releaseBtn, classes.btn]}
              size={"small"}
            >
              Release
            </Button>
            <Button
              className={[classes.requestBtn, classes.btn]}
              size={"small"}
            >
              Request
            </Button>
          </ListItem>
        </List>
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
