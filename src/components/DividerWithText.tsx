import React from "react";
import { makeStyles } from "@material-ui/core";
import { Colors } from "../Utils/constants/colors/colors";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center"
  },
  border: {
    borderBottom: `1px solid ${Colors.blueMain}`,
    width: "100%"
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 1.5,    
    color: Colors.grey,
    '& > *': {
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
  }
}));

const DividerWithText = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.border} />
      <span className={classes.content}>{children}</span>
      <div className={classes.border} />
    </div>
  );
};
export default DividerWithText;