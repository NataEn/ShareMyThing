import React from "react";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { useStyles } from "./SearchInputStyles";

/**
 * @description search input
 * @returns JSX element
 */

const SearchInput = ({ filterItems }) => {
  const classes = useStyles();

  return (
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
        onChange={(event) => filterItems(event.target.value)}
      />
    </div>
  );
};

SearchInput.propTypes = {};

export default SearchInput;
