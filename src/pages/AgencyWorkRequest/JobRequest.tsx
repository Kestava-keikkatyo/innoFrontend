import {
  Container,
  Grid,
  Typography,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import React from "react";
import RequestInfo from "./AccordionDetails";

const JobRequest: React.FC<any> = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container>
      <Grid container>
        <Grid item md={12}>
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
      </Grid>
    </Container>
  );
};

export default JobRequest;

const useStyles = makeStyles((theme) => ({
  request: {
    marginBottom: "3%",
    width: '100%'
  },
}));
