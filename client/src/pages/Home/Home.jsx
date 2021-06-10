import React from "react";
import PropTypes from "prop-types";
import { Typography, Divider, List, Container } from "@material-ui/core";
import ListItem from "../../components/ListItem/ListItem";

import { Link } from "react-router-dom";
import { useStyles } from "./HomeStyles";
/**
 * @description home page
 * @returns JSX element
 */
export default function Home({ items }) {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" component="h4" className={classes.title}>
        Available Now
      </Typography>
      <List className={classes.container}>
        {items.map((item, index) => (
          <ListItem item={item} id={index} key={item.name} />
        ))}
      </List>
    </Container>
  );
}
Home.propTypes = {};
