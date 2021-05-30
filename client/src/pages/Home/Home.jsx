import React from "react";
import Typograpy from "@material-ui/core/Typography";
import { useStyles } from "./StyledHome";

export default function Home() {
  const classes = useStyles();
  return (
    <Typograpy variant="h4" component="h4" className={classes.title}>
      Available Now
    </Typograpy>
  );
}
