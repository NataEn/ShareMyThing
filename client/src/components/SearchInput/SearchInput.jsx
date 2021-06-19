import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { filterItems } from "../../redux/actions/item.actions";
import { useDispatch } from "react-redux";
import { useStyles } from "./SearchInputStyles";

/**
 * @description search input
 * @returns JSX element
 */

const SearchInput = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [str, setStr] = useState();
  useEffect(() => {
    dispatch(filterItems(str));
  }, [dispatch, str]);

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
        onChange={(event) => {
          return setStr(event.target.value);
        }}
      />
    </div>
  );
};

SearchInput.propTypes = {};

export default SearchInput;
