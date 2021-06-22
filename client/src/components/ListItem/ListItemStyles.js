import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  h4: {
    margin: theme.spacing(1),
    color: "inherit",
  },
  listItemContainer: {
    position: "relative",
    "&:hover ": {
      "& $link": {
        display: "block",
        opacity: "0.8",
      },
      "& $container": { opacity: "0.5" },
    },
  },

  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    display: "block",
    width: "100%",
    textAlign: "center",
    fontWeight: "500",
    color: theme.palette.primary1Color,
  },
  image: {
    marginRight: theme.spacing(2),
    height: "100%",
    width: "13%",
    minWidth: "100px",
  },
  carousel: {
    marginRight: theme.spacing(2),
    height: "100%",
    width: "30%",
    minWidth: "200px",
  },
  description: {
    padding: "0",
  },
  descriptionExpanded: {
    height: "100%",
    margin: "0 1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  btn: {
    marginLeft: theme.spacing(0.5),
  },
  releaseBtn: {
    backgroundColor: theme.palette.primary3Color,
    borderColor: theme.palette.primary2Color,
    paddingLeft: theme.spacing.apply(2),
    paddingRight: theme.spacing.apply(2),
    color: "white",
    fontWeight: 500,
    "&:hover": {
      color: theme.palette.primary2Color,
    },
  },
  requestBtn: {
    backgroundColor: theme.palette.primary2Color,
    borderColor: theme.palette.primary2Color,
    paddingLeft: theme.spacing.apply(2),
    paddingRight: theme.spacing.apply(2),
    color: "white",
    fontWeight: 500,
    "&:hover": {
      color: theme.palette.primary2Color,
    },
  },
  link: {
    display: "none",
    width: "100%",
    textDecoration: "none",
    transition: theme.transitions.create(["color", "opacity"], {
      duration: theme.transitions.duration.enteringScreen,
    }),
    opacity: "0",
    position: "absolute",
    bottom: "0",
    left: "0",
    zIndex: "100",
    backgroundColor: "#b5b3b3c7",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    borderRadius: "0.25rem",
  },
}));
