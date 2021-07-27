import {
  Container,
  Grid,
  Typography,
  makeStyles,
  useTheme,
  Button,
} from "@material-ui/core";
import React from "react";
import RequestInfo from "./AccordionDetails";
import WorkerTransferList from "./WorkerTransferList";

const JobRequest = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container>
      <Grid container>
        <Grid item md={6}>
          <Typography variant="h6" className={classes.request}>
            Valitse Pyyntö
          </Typography>
          <div className={classes.request}>
            <RequestInfo />
          </div>
          <div className={classes.request}>
            <RequestInfo />
          </div>
          <div className={classes.request}>
            <RequestInfo />
          </div>
          <div className={classes.request}>
            <RequestInfo />
          </div>
          <div className={classes.request}>
            <RequestInfo />
          </div>
          <div className={classes.request}>
            <RequestInfo />
          </div>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h6">Valitse Työntekijät</Typography>

          <div className={classes.request}>
            <WorkerTransferList />
          </div>
        </Grid>
        
      </Grid>
      <Button 
        variant="outlined"
        color='primary'
        className={classes.add}
        >Lisää aktiivisiin työkeikkoihin</Button>
    </Container>
  );
};

export default JobRequest;

const useStyles = makeStyles((theme) => ({
  request: {
    marginBottom: "2%",
  },
  add: {
      float: 'right'
  }
}));
