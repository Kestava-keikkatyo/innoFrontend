import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "auto",
      marginBottom: "2.5em",
      display: "inline-block"
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
    avatar: {
      backgroundColor: red[500],
    },
    text: {
      textAlign: "center",
      width: "20%",
      display: "inline",
    },
    header: {
      paddingBottom: "0px"
    },
    gridButton: {
      paddingTop: "1.125em",
      textAlign: "center",
      
    },
    gridText: {
      textAlign: "center",
      paddingTop: "1.125em",
      paddingRight:"5em",
      [theme.breakpoints.down('xs')]:{
        paddingRight: 0
      }
    },
    content: {
      paddingTop: "0"
    },
    button: {
      width: "80%",
      marginTop: "0.3125em"
    }
  })
);

export const AgencyCard = (prop: { agency: any }) => {
  const classes = useStyles();

  const acceptCooperation = () => {
    alert("Yhteistyö tehty")
  };
  const {agency} = prop
  console.log("testestest",agency.name)
  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={agency.name}
        subheader={agency.email}
      />

  
      <CardContent className={classes.content}>
        <Grid container spacing={0}>
          <Grid className={classes.gridButton} item sm={4} xs={12}>
            <Button className={classes.button}variant="contained" color="primary"
            onClick={acceptCooperation}
            >
              Siirry yrityksen sivuille
            </Button>
            <Button className={classes.button} variant="contained" color="primary"
            onClick={acceptCooperation}
            >
              Lähetä yhteistyökutsu
            </Button>
          </Grid>
          <Grid className={classes.gridText}item sm={8} xs={12} >
            <Typography variant="body2" color="textSecondary" component="p" >
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 200 cups of frozen peanuts along
              with the mussels, if you like.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AgencyCard
