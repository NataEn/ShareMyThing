import React, { useState } from "react";
import { useStyles } from "./AddItemFormStyles";
import TextField from "@material-ui/core/TextField";
import { Typography, Container } from "@material-ui/core";

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
      <form className={classes.form}>
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
        />
      </form>
    </Container>
  );
};

export default AddItemForm;
