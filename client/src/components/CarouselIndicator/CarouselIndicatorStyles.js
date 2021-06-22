import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  carousel__indicator: {
    display: "block",
    padding: "0.25rem",
    width: "50px",
    height: "50px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "opacity .15s cubic-bezier(.4, 0, 1, 1)",
    border: "0.5px solid black",
    borderRadius: theme.border.radius,
  },
  active: {
    border: "2px solid black",
  },
}));
