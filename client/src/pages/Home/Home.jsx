import React from "react";
import Typograpy from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "../../components/ListItem/ListItem";
import Container from "@material-ui/core/Container";
import items from "../../items.json";
import { useStyles } from "./HomeStyles";

export default function Home() {
  const classes = useStyles();
  return (
    <Container>
      <Typograpy variant="h4" component="h4" className={classes.title}>
        Available Now
      </Typograpy>
      <List className={classes.container}>
        {items.map((item, index) => (
          <ListItem {...item} id={index} key={index} />
        ))}
      </List>
    </Container>
  );
}
