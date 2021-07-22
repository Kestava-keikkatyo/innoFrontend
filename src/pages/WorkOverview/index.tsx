import React, { useEffect } from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import AddWorkTask from "./AddWorkTask";




const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },

}));

const WorkOverview = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container maxWidth="xl" className={classes.root}>
    <AddWorkTask/>
    </Container>
  );
};
export default WorkOverview;
