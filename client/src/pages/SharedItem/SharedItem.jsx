import React from "react";
import { Container, Typography } from "@material-ui/core";

import { useStyles } from "./SharedItemStyles";
import { useLocation, useParams } from "react-router-dom";
import ListItemComponent from "../../components/ListItem/ListItem";

export default function SharedItem() {
  const { id } = useParams();
  const item = useLocation().state;
  const location = useLocation();
  const classes = useStyles();
  debugger;
  return (
    <div className={classes.container}>
      {item && (
        <>
          <Typography variant={"h5"} className={classes.title}>
            {item.name}
          </Typography>
          <Container className={classes.data}>
            <ListItemComponent id={id} item={item} />
          </Container>
        </>
      )}
    </div>
  );
}
