import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import LimitJobSearch from "./LimitJobSearch";
import Button from "@material-ui/core/Button";
import JobCard from "./JobCard";
import { Grid, Container } from "@material-ui/core";
import JobsInsidence from "./JobsIncidence";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginTop: "21.5%",
      marginRight: "20%",
      
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    button: {
      float: "right",
    },
    jobCard: {
    marginTop: "5%"
    },
    incidence: {
     marginLeft: '76%',
     [theme.breakpoints.down('sm')]: {
       marginLeft:0
     }
    }
  })
);

const JobList: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  return (
    <Container>
      
    <Grid container spacing={1}>
      <Grid item>
        
        <Card className={classes.root}>
          <CardHeader title="Rajaa hakua" />
          <CardContent>
            <LimitJobSearch />
          </CardContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
          <Button className={classes.button}>Etsi</Button>
        </Card>
      </Grid>
      <Grid item className={classes.jobCard}>
      <div className={classes.incidence}>
      <JobsInsidence/>
      </div>
      <h3>Työpaikkoja löytyi 423 kappaletta</h3> 
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Grid>
    </Grid>
    </Container>
  )
}
/*
  return (
    <Container>
    <Grid container spacing={1}
    
    >
      <Grid container item xs={3} spacing={10}>
        <Card className={classes.root}>
          <CardHeader title="Rajaa hakua" />
          <CardContent>
            <LimitJobSearch />
          </CardContent>
          <CardActions disableSpacing></CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
          <Button className={classes.button}>Etsi</Button>
        </Card>
      </Grid>
      <Grid 
      container item xs={9} spacing={3}
      className={classes.jobCard}
      >
        <JobCard />
      </Grid>
    </Grid>
    </Container>
  );
};

*/

export default JobList;
