import React from "react";
import PropTypes from "prop-types";
import { Typography, Divider, List, Container } from "@material-ui/core";
import ListItem from "../../components/ListItem/ListItem";
import { useSelector } from "react-redux";

import { useStyles } from "./HomeStyles";
/**
 * @description home page
 * @returns JSX element
 */
export default function Home({}) {
  const classes = useStyles();
  const itemsState = useSelector((state) => state.itemsReducer);

  return (
    <Container>
      <Typography variant="h4" component="h4" className={classes.title}>
        Available Now
      </Typography>
      <List className={classes.container}>
        {itemsState &&
          itemsState.items.map((item, index) => (
            <ListItem item={item} id={index} key={item.name} />
          ))}
      </List>
    </Container>
  );
}
Home.propTypes = {};
