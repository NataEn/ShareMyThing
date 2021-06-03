import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  "& > *": {
    margin: theme.spacing(1),
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "2rem auto",
    width: "40%",
  },
  h6: { textAlign: "center" },
  form: {
    margin: "0 auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  formInput: {
    margin: theme.spacing(1.5),
  },
  btn: {
    margin: "0",
    padding: theme.spacing(0.5),
    width: "max-content",
    alignSelf: "flex-end",
  },
  confirmBtn: {
    backgroundColor: theme.palette.primary2Color,

    color: "white",
    "&:hover": { color: theme.palette.primary2Color, backgroundColor: "white" },
  },
}));
