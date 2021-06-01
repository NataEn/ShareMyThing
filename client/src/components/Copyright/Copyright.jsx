import React from "react";
import { useStyles } from "./CopyrightStyles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Copyright() {
  const classes = useStyles();
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      className={classes.copyright}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://codesandbox.io/s/github/NataEn/SharingHub/tree/main/client"
      >
        ShareHub
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}
