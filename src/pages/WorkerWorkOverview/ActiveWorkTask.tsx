import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const CurrentWorkTask: React.FC<any> = () => {
    const classes = useStyles();
  return (
    <div>
      <Typography className={classes.headline} variant="h6" gutterBottom>
        Aktiivinen
      </Typography>
    </div>
  );
};

const useStyles = makeStyles(() => ({
    headline: {
     textAlign: 'center'
    }
  }));

export default CurrentWorkTask;
