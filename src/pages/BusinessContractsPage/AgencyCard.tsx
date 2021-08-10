import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button, Card, CardContent, CardHeader, Collapse, Grid, IconButton, Typography, CardActions } from '@material-ui/core';

import CooperationInfoModal from './CooperationInfoModal';
import { red } from '@material-ui/core/colors';


interface Agency {
  businessContracts: [string];
  name: string;
  email: string;
  profile: string;
}

export const AgencyCards = (prop: { agency: Agency }) => {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { agency } = prop;
  const [displayModal, setDisplayModal] = React.useState(false);

  const handleCooperationOpen = () => {
    setDisplayModal(true);
  };

  const contractId = agency.businessContracts[0];

  return (
    <div>
    <Card className={classes.root} onClick={handleExpandClick}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={"profile.profilePicture"}
            alt="profilePicture"
          />
        }
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
        title={agency.name}
        subheader={agency.email}
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Grid container spacing={0}>
          <Grid className={classes.gridButton} item sm={4} xs={12}>
            <CardActions>
              <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Siirry yrityksen profiiliin
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={handleCooperationOpen}
            >
              Lähetä yhteistyökutsu
            </Button>
            </div>
            </CardActions>
          </Grid>
          <Grid className={classes.gridText} item sm={8} xs={12}>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like. This impressive paella is a perfect
              party dish and a fun meal to cook together with your guests. Add
              200 cups of frozen peanuts along with the mussels, if you like.
            </Typography>
          </Grid>
        </Grid> 
        </CardContent>
      </Collapse>
    </Card>
        <CooperationInfoModal
        displayModal={displayModal}
        agency={agency}
        contractId={contractId}
        closeModal={() => setDisplayModal(false)}
      />
      </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    marginBottom: '2.5em',
    display: 'inline-block',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  text: {
    textAlign: 'center',
    width: '20%',
    display: 'inline',
  },
  header: {
    paddingBottom: '0px',
  },
  gridButton: {
    paddingTop: '1.125em',
    textAlign: 'center',
  },
  gridText: {
    textAlign: 'center',
    paddingTop: '1.4em',
    paddingRight: '5em',
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
    },
  },
  content: {
    paddingTop: '0',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  button: {
    marginBottom: '1.5%'
  }
}));

export default AgencyCards;
