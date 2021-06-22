import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  ul: {
    padding: 0,
    margin: 0,
    listStyleType: "none",
  },

  // Fix for jumping arrows
  carouselContainer: {
    margin: "0 0.5rem",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "210px",
    border: "1px solid black",
    borderRadius: theme.border.radius,
    width: "100%",
  },

  carousel: {
    position: "relative",
  },

  carousel__indicators: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "20px",

    "& $li": {
      "&:nth-of-type(n + 2)": {
        marginLeft: "9px",
      },
    },
  },
}));
