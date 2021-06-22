import React from "react";
import { Paper, Button } from "@material-ui/core";

function CarouselItem({ name, img }) {
  return (
    <Paper>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <Button className="Enlarge">Enlarge</Button>
    </Paper>
  );
}
export default CarouselItem;
