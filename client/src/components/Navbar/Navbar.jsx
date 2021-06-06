import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useStyles } from "./NavbarStyles";

import SearchInput from "../SearchInput/SearchInput";

/**
 * @description top navigation bar of app
 * @returns JSX element
 */

//TODO: implement styling as in https://css-tricks.com/styling-based-on-scroll-position/
const Navbar = ({ filterItems }) => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <AppBar>
        <Toolbar className={classes.container}>
          <a className={clsx(classes.title, true ? classes.a : "")} href="/">
            <Typography variant="h6" noWrap>
              ShareHub
            </Typography>{" "}
          </a>
          <SearchInput filterItems={filterItems} />

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <a className={classes.a} href="/items/addItem">
              <Button className={classes.shareButton}>Share</Button>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
