import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  carousel__slide: {
    marginRight: "auto",
    marginLeft: "auto",
    display: "none",
    maxWidth: "900px",
    listStyleType: "none",
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      paddingRight: "60px",
      paddingLeft: "60px",
    },
  },
  active: {
    display: "block",
  },

  // Content of slides
  carouselSlide__content: {
    marginBottom: "19px",
    fontFamily: " 'Open Sans', 'Trebuchet MS', sans-serif",
    fontSize: "16px",

    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  },
}));
