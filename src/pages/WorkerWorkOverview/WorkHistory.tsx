import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const WorkerHistory:React.FC<any> = () => {
    const classes = useStyles();
  return (
    <div>
      <Typography className={classes.headline} variant="h6" gutterBottom>
        Historia
      </Typography>
    </div>
  );
};

const useStyles = makeStyles(() => ({
    headline: {
     textAlign: 'center'
    }
  }));

export default WorkerHistory;
