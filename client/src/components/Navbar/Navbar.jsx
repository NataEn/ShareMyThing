import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useStyles } from "./NavbarStyles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <AppBar>
        <Toolbar className={classes.container}>
          <a className={clsx(classes.title, classes.a)} href="/">
            <Typography variant="h6" noWrap>
              ShareHub
            </Typography>{" "}
          </a>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="search the hub…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
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

export default Navbar;
