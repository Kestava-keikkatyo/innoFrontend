import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
const WorkRequest = () => {
    const classes = useStyles();
  return (
    <div>
      <Typography className={classes.headline} variant="h6" gutterBottom>
       Keikka pyynnöt
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
    headline: {
     textAlign: 'center'
    }
  }));

export default WorkRequest;
