import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  carousel__indicator: {
    display: "block",
    width: "24px",
    height: "3px",
    backgroundColor: "#111",
    cursor: "pointer",
    opacity: ".15",
    transition: "opacity .15s cubic-bezier(.4, 0, 1, 1)",

    "&:hover": {
      opacity: ".5",
    },

    "&$active": {
      "&:hover": {
        opacity: ".75",
        color: "green",
      },
    },
  },
}));
