import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  carousel__slide: {
    width: "100%",
    margin: "0",
    padding: "none",
    display: "none",
    listStyleType: "none",
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      paddingRight: "60px",
      paddingLeft: "60px",
    },
    "& $img": {
      width: "100%",
    },
  },
  active: {
    display: "block",
  },

  // Content of slides
  carouselSlide__content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "19px",
    padding: "0.25rem",
    fontFamily: " 'Open Sans', 'Trebuchet MS', sans-serif",
    fontSize: "16px",

    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    // "& $button": {
    //   display: "block",

    // },
  },
}));
