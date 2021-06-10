import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useStyles } from "./ImagesInputStyles";
import { Typography, IconButton } from "@material-ui/core";
import { PhotoLibrary, Delete } from "@material-ui/icons";

/**
 * Input field for multiple images
 * @name ImagesInput
 * @param {Array} imgs react state object array of all images, e.g. {name:"image name", url:url encoding of img, file: img blob }
 * @param {Function} setImgs react set-state function to update the imgs array
 * @returns {JSX.Element} JSX element
 */

const ImagesInput = ({ imgs, setImgs }) => {
  const fileInput = useRef(null);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {imgs.length > 1 &&
        imgs.map((img, index) => {
          console.log("image", img, index);
          return (
            <div className={classes.imgContainer} key={`${img.name}-${index}`}>
              <img
                src={img.url}
                alt={img.name}
                key={img.name}
                className={classes.img}
              />
              <Typography variant={"subtitle2"} className={classes.imglabel}>
                {img.name}
              </Typography>
              <IconButton
                aria-label="delete"
                className={classes.imgButton}
                onClick={(e) => {
                  setImgs(imgs.filter((item) => item.name !== img.name));
                }}
              >
                <Delete fontSize="small" color="secondary" />
              </IconButton>
            </div>
          );
        })}
      {
        <IconButton
          className={classes.imgButton}
          aria-label="upload picture"
          component="span"
          onClick={() => fileInput.current.click()}
        >
          <Typography
            variant={"subtitle2"}
            className={classes.imglabel}
            title="addImgText"
          >
            Add Images
          </Typography>{" "}
          &nbsp;
          <PhotoLibrary fontSize={"large"} height={"300px"} />
        </IconButton>
      }
      <input
        type="file"
        multiple
        name="images"
        ref={fileInput}
        className={classes.fileInput}
        onChange={(e) => {
          const files = Object.values(e.target.files);
          debugger;
          const imagsMap = files.map((file) => ({
            file: file,
            url: URL.createObjectURL(file),
            name: file.name,
          }));
          setImgs([...imagsMap, ...imgs]);
        }}
      />
    </div>
  );
};

ImagesInput.propTypes = {
  img: PropTypes.array,
  setImgs: PropTypes.func,
};
export default ImagesInput;
