import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary,
    textAlign: "center",

    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: theme.spacing(3),
  },
}));
