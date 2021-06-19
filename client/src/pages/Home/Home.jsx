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
export default function Home() {
  const itemsState = useSelector((state) => state.itemsReducer);
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" component="h4" className={classes.title}>
        Available Now
      </Typography>
      <List className={classes.container}>
        {itemsState.filteredItems.length &&
          itemsState.filteredItems.map((item, index) => (
            <ListItem item={item} id={index} key={`${item.name}-${index}`} />
          ))}
      </List>
    </Container>
  );
}
Home.propTypes = {};
