import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import LimitJobSearch from "./LimitJobSearch";
import Button from "@material-ui/core/Button";
import JobCard from "./JobCard";
import { Grid, Container } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginTop: "5%",
      marginLeft: "2%",
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
    marginTop: "1.4%"
    },
    search: {
     
    }
  })
);

const JobList: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  return (
    <Container>
    <Grid container spacing={1}
    
    >
      <Grid item>
        <Card className={classes.root}>
          <CardHeader title="Rajaa hakua" />
          <CardContent className={classes.search}>
            <LimitJobSearch />
          </CardContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
          <Button className={classes.button}>Etsi</Button>
        </Card>
      </Grid>
      <Grid item className={classes.jobCard}>
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
