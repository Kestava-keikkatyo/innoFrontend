import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  Typography,
  CardActions,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CooperationInfoModal from './CooperationInfoModal';
import { red } from '@mui/material/colors';
import { useHistory } from 'react-router';
import { setAlert } from "../../actions/alertActions"
import { severity } from '../../types/types';
import { useDispatch } from 'react-redux';

/**
 * @component
 * @desc
 * A card with information of the agency.
 * Contract request can be sent.
 *
 */
 const AgencyCard: React.FC<any> = ({ agency }) => {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [displayModal, setDisplayModal] = React.useState(false);

  const handleCooperationOpen = () => {
    setDisplayModal(true);
  };

  const handleSiirryProfiiliin = (agency: any) => {
    if (!agency._id){
      dispatch(setAlert('Agency profile is missing!', severity.Error));
      return;
    } else {
      history.push({
        pathname: '/agencies/profile/' + agency._id,
        state: { profileId: agency._id }
      });
    }
  };

  return (
    <div>
      <Card className={classes.root} onClick={handleExpandClick}>
        <CardHeader
          // avatar={
          //   <Avatar
          //     aria-label="recipe"
          //     className={classes.avatar}
          //     src={profilePic}
          //     alt="profilePicture"
          //   />
          // }
          action={
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              size="large">
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
                      type="button"
                      onClick={handleCooperationOpen}
                    >
                      {t('send_request')}
                    </Button>
                    <Button variant="contained" onClick={() => handleSiirryProfiiliin(agency)}>
                      {t('transfer_company_profile')}
                    </Button>
                  </div>
                </CardActions>
              </Grid>
              <Grid className={classes.gridText} item sm={8} xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                  HP-yrityksen lyhyt kuvaus.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
      <CooperationInfoModal
        displayModal={displayModal}
        agency={agency}
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
    [theme.breakpoints.down('sm')]: {
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
    marginBottom: '3%',
  },
}));

export default AgencyCard;
