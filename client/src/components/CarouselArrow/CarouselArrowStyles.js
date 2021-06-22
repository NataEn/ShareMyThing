import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  carousel__arrow: {
    position: "absolute",
    top: "50%",
    display: "block",
    color: theme.palette.primary1Color,
    cursor: "pointer",
    opacity: ".75",
    transform: " translate(-50%,-50%)",
    transition: "opacity .15s cubic-bezier(.4, 0, 1, 1)",
    border: "none",
    backgroundColor: "none",

    "&:focus": {
      outline: 0,
    },

    "&:hover": {
      opacity: "1",
      backgroundColor: theme.palette.primary1Color,
      color: "white",
    },
  },

  left: {
    left: "2rem",
  },

  right: {
    right: "-1rem",
  },
}));
