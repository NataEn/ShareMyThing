import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStyles } from "./AddItemFormStyles";
import TextField from "@material-ui/core/TextField";
import { Typography, Container, Button } from "@material-ui/core";
import ImagesInput from "../ImagesInput/ImagesInput";

import clsx from "clsx";

/**
 * @name AddItemForm
 * @description gets data about a shared item
 * @returns {JSX.Element} JSX element
 */

const AddItemForm = () => {
  const classes = useStyles();
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container className={classes.container}>
      <Typography variant={"h6"} className={classes.h6}>
        Share Item
      </Typography>
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting form");
        }}
      >
        <ImagesInput />
        <TextField
          id="title"
          label="Item title"
          className={classes.formInput}
        />
        <TextField
          id="my name"
          className={classes.formInput}
          label="Item owner"
        />
        <TextField
          id="description"
          className={classes.formInput}
          label="Item description"
          multiline
          rowsMax={5}
          value={value}
          onChange={handleChange}
        />
        <TextField
          id="condition"
          className={classes.formInput}
          label="Item condition"
        />{" "}
        <Button
          variant="contained"
          size={"small"}
          className={clsx(classes.btn, classes.confirmBtn)}
          type="submit"
        >
          Share
        </Button>
      </form>
    </Container>
  );
};
AddItemForm.propTypes = {};
export default AddItemForm;
