import React from "react";
import PropTypes from "prop-types";
import { Container, Typography } from "@material-ui/core";

import { useStyles } from "./SharedItemStyles";
import { useLocation, useParams } from "react-router-dom";
import ListItemComponent from "../../components/ListItem/ListItem";
import ImageCarousel from "../../components/Carousel/Carousel";
/**
 * @description page of each shared item
 * @returns JSX element
 */
export default function SharedItem() {
  const { id } = useParams();
  const { item, imgsBase64 } = useLocation().state;
  const location = useLocation();
  const classes = useStyles();
  debugger;
  return (
    <div className={classes.container}>
      {item && (
        <>
          <Typography variant={"h5"} className={classes.title}>
            {item.name}
          </Typography>
          <Container className={classes.data}>
            <ListItemComponent id={id} item={item} />
            <ImageCarousel slides={imgsBase64} name={item.name} />
          </Container>
        </>
      )}
    </div>
  );
}
SharedItem.propTypes = {};
