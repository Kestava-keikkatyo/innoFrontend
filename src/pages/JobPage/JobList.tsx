import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import LimitJobSearch from "./LimitJobSearch";
import Button from "@material-ui/core/Button";
import JobCard from "./JobCard";
import { Grid, Container } from "@material-ui/core";
import JobsInsidence from "./JobsIncidence";
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginTop: "21.5%",
      marginRight: "20%",
      
    },  
    button: {
      float: "right",
    },
    jobCard: {
    marginTop: "5%"
    },
  })
);

const JobList: React.FC = () => {

  const { t } = useTranslation()
  const classes = useStyles();

  return (
    <Container>
    <Grid container spacing={1}>
      <Grid item>
        <Card className={classes.root}>
          <CardHeader title= {t("limit_search")} />
          <CardContent>
            <LimitJobSearch />
          </CardContent>
          <Button className={classes.button}> {t("search")}</Button>
        </Card>
      </Grid>
      <Grid item className={classes.jobCard}>
      <JobsInsidence/>
      <h3> {t("jobs_found")} 423</h3> 
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Grid>
    </Grid>
    </Container>
  )
}


export default JobList;
