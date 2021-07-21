import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router';

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
    paddingTop: '1.125em',
    paddingRight: '5em',
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
    },
  },
  content: {
    paddingTop: '0',
  },
  button: {
    width: '80%',
    marginTop: '0.3125em',
  },
}));

export const ProfileCard = (prop: { profile: any }) => {
  const classes = useStyles();
  const { profile } = prop;

  const history = useHistory();

  const transferToProfile = (profileId: any) => {
    history.push({
      pathname: '/profiles/profile-view',
      state: { profileId: profileId },
    });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title={profile.name}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
      />

      <CardContent className={classes.content}>
        <Grid container spacing={0}>
          <Grid className={classes.gridButton} item sm={4} xs={12}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => transferToProfile(profile._id)}
            >
              Siirry profiiliin
            </Button>
          </Grid>
          <Grid className={classes.gridText} item sm={8} xs={12}>
            <Typography variant="body2" color="textSecondary" component="p">
              {profile.email}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {profile.phone}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
