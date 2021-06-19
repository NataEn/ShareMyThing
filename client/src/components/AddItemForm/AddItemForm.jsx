import React, { useState } from "react";
import axios from "axios";
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("in submit");
    const formData = new FormData();
    //TODO: validate the inputs
    formData.append("name", event.target.title.value);
    formData.append("category", event.target.category.value);
    formData.append("owner", event.target.owner.value);
    formData.append("description", event.target.description.value);
    formData.append("condition", event.target.condition.value);
    imgs.forEach((img) => formData.append("images", img.file));

    const res = await axios.post("/api/items/Admin", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    alert(`sent item data: ${JSON.stringify(Object.fromEntries(formData))}`);
    alert(JSON.stringify(res));
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
          id="category"
          label="Item category"
          className={classes.formInput}
          name="category"
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
