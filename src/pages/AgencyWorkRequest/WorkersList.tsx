import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const WorkersList: React.FC<any> = ({ profile }) => {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();

  const { t } = useTranslation()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  /*
  const handleSiirryProfiiliin = (profileId: any) => {
    history.push({
      pathname: "/profiles/profile-view",
      state: { profileId: profileId },
    });
  };
  */

  return (
    
    <Card className={classes.root} onClick={handleExpandClick}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" className={classes.avatar} />}
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title="jarmo"
        subheader="helsinki"
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            variant="body2"
            color="primary"
            style={{ fontWeight: 500 }}
          >
            <EmailIcon
              //fontSize="small"
              style={{ marginBottom: -3, color: "#eb5a02", fontSize: 16 }}
            />{" "}
            {t("email")}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.typoBody2}
          >
          
          </Typography>
      
          <Typography
            style={{ marginTop: 24, fontWeight: 500 }}
            variant="body2"
            color="primary"
          >
            <PhoneIcon
              //fontSize="small"
              style={{ marginBottom: -3, color: "#eb5a02", fontSize: 16 }}
            />{" "}
           {t("phone")}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.typoBody2}
          >
           
          </Typography>
          <Typography
            style={{ marginTop: 24, fontWeight: 500 }}
            variant="body2"
            color="primary"
          >
            <PublicIcon
              //fontSize="small"
              style={{ marginBottom: -3, color: "#eb5a02", fontSize: 16 }}
            />{" "}
            {t("website")}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.typoBody2}
          >
     
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="primary" className={classes.button}>
            {t('transfer_profile')}
          </Button>
        </CardActions>
      </Collapse>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginBottom: 16,
      border: "1px solid #E0E0E0",
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
      backgroundColor: "#eb5a02",
    },
    typoBody2: {
      marginTop: 5,
    },
    button: {
      margin: 8,
    },
  })
);

export default WorkersList;