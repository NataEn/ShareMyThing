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
  const [imgs, setImgs] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in submit");
    const data = new FormData();
    //TODO: validate the inputs
    data.append("title", event.target.title.value);
    data.append("owner", event.target.owner.value);
    data.append("description", event.target.description.value);
    data.append("condition", event.target.condition.value);
    data.append(
      "images",
      imgs.map((img) => img.file)
    );
    alert(`sent item data: ${JSON.stringify(Object.fromEntries(data))}`);
    //TODO: send formData object to the server
  };
  return (
    <Container className={classes.container}>
      <Typography variant={"h6"} className={classes.h6}>
        Share Item
      </Typography>
      <form
        className={classes.form}
        onSubmit={handleSubmit}
        noValidate
        encType="multipart/form-data"
      >
        <ImagesInput imgs={imgs} setImgs={setImgs} />
        <TextField
          id="title"
          label="Item title"
          className={classes.formInput}
          name="title"
        />
        <TextField
          id="my name"
          className={classes.formInput}
          label="Item owner"
          name="owner"
        />
        <TextField
          id="description"
          className={classes.formInput}
          label="Item description"
          multiline
          rowsMax={5}
          value={value}
          onChange={handleChange}
          name="description"
        />
        <TextField
          id="condition"
          className={classes.formInput}
          label="Item condition"
          name="condition"
        />
        <Button
          variant="contained"
          size={"small"}
          className={clsx(classes.btn, classes.confirmBtn)}
          type="submit"
          onClick={(e) => console.log("clicked submit btn")}
        >
          Share
        </Button>
      </form>
    </Container>
  );
};
AddItemForm.propTypes = {};
export default AddItemForm;
