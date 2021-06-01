import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  App: {
    height: "100vh",
    width: "100vw",
    position: "relative",
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
