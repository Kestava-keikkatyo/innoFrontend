import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
const WorkRequest:React.FC<any> = () => {
    const classes = useStyles();
  return (
    <div>
      <Typography className={classes.headline} variant="h6" gutterBottom>
       Keikka pyynnöt
      </Typography>
    </div>
  );
};

const useStyles = makeStyles(() => ({
    headline: {
     textAlign: 'center'
    }
  }));

export default WorkRequest;
