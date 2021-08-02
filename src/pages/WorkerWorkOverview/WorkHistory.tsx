import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { classnames } from "@material-ui/data-grid";
const WorkerHistory = () => {
    const classes = useStyles();
  return (
    <div>
      <Typography className={classes.headline} variant="h6" gutterBottom>
        Historia
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
    headline: {
     textAlign: 'center'
    }
  }));

export default WorkerHistory;
