import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  "& *": {
    scrollBehavior: "smooth",
  },
  App: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "scroll",
  },
  main: {
    position: "relative",
    top: "4rem",
    width: "100%",
    height: "max-content",
  },
  footer: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
}));
