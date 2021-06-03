import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./CopyrightStyles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
/**
 * @name Copyright
 * @description copyright message at the bottom of each page
 * @returns {JSX.Element} Copyright JSX element
 */

const Copyright = () => {
  const classes = useStyles();
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      className={classes.copyright}
    >
      {"Copyright "} &nbsp;
      <Link color="inherit" href="/">
        ShareHub {" © "}
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
};
export default Copyright;
Copyright.propTypes = {};
