import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
  description: {
    padding: "0",
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
}));
