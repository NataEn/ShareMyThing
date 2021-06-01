import React, { useState, useRef } from "react";
import { useStyles } from "./ImagesInputStyles";
import { Typography, IconButton } from "@material-ui/core";
import { PhotoLibrary, Delete } from "@material-ui/icons";

const ImagesInput = () => {
  const fileInput = useRef(null);
  const [imgs, setImgs] = useState([]);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {imgs.length > 1 &&
        imgs.map((img, index) => {
          console.log("image", img, index);
          return (
            <div className={classes.imgContainer}>
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
          <Typography variant={"subtitle2"} className={classes.imglabel}>
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

export default ImagesInput;
