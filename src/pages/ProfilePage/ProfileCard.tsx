import React from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import clsx from 'clsx';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Button } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import { useHistory } from 'react-router-dom';
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next'

const ProfileCard: React.FC<any> = ({ profile }) => {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { t } = useTranslation()

  const handleSiirryProfiiliin = (profileId: any) => {
    history.push({
      pathname: '/profiles/profile-view',
      state: { profileId: profileId },
    });
  };

  return (
    <Card className={classes.root} onClick={handleExpandClick}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={profile.profilePicture}
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
            size="large">
            <ExpandMoreIcon />
          </IconButton>
        }
        title={profile.name}
        subheader={profile.city}
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
              style={{ marginBottom: -3, color: '#eb5a02', fontSize: 16 }}
            />{' '}
            {t('email')}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.typoBody2}
          >
            {profile.email}
          </Typography>

          <Typography
            style={{ marginTop: 24, fontWeight: 500 }}
            variant="body2"
            color="primary"
          >
            <PhoneIcon
              //fontSize="small"
              style={{ marginBottom: -3, color: '#eb5a02', fontSize: 16 }}
            />{' '}
            {t('phone')}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.typoBody2}
          >
            {profile.phone}
          </Typography>

          <Typography
            style={{ marginTop: 24, fontWeight: 500 }}
            variant="body2"
            color="primary"
          >
            <PublicIcon
              //fontSize="small"
              style={{ marginBottom: -3, color: '#eb5a02', fontSize: 16 }}
            />{' '}
            {t('website')}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.typoBody2}
          >
            <Link
              target="_blank"
              color="textSecondary"
              href={profile.website}
              underline="hover">
              {profile.website}
            </Link>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={() => handleSiirryProfiiliin(profile._id)}
          >
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
      width: '100%',
      marginBottom: 16,
      border: '1px solid #E0E0E0',
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
      backgroundColor: '#eb5a02',
    },
    typoBody2: {
      marginTop: 5,
    },
    button: {
      margin: 8,
    },
  })
);

export default ProfileCard;
