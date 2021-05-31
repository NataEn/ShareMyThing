import React from "react";
import { Typography, Divider, List, Container } from "@material-ui/core";
import ListItem from "../../components/ListItem/ListItem";

import items from "../../items.json";
import { Link } from "react-router-dom";
import { useStyles } from "./HomeStyles";

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" component="h4" className={classes.title}>
        Available Now
      </Typography>
      <List className={classes.container}>
        {items.map((item, index) => (
          <Link
            className={classes.link}
            to={{
              pathname: `/items/${index}`,
              state: item,
            }}
            key={index}
          >
            <ListItem item={item} id={index} />
            <Divider />
          </Link>
        ))}
      </List>
    </Container>
  );
}
