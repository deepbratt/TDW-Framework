import { makeStyles } from "@material-ui/core";

const GlobalStyles = makeStyles((theme) => ({
  multipleInput: {
    minWidth: "100%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  buttonWrap: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "10px 30px",
    margin: "5px 0",
    border: "2px solid",
  },
  loginFormGrid: {
    height: "100vh",
  },
  form: {
    minWidth: "100%",
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      padding: "10px",
    },
  },
  formCard: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
    padding: "50px 60px",
    borderRadius: "10px",
  },
  loginbtn: {
    margin: "5px 0",
    paddingTop: "10px",
    paddingBottom: "10px",
    boxShadow: "none",
  },
  formStyle: {
    margin: "20px 0px",
  },
}));

export default GlobalStyles;
