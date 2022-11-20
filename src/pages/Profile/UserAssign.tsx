import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById, fetchAllBusinesses } from '../../actions/usersActions';
import { IRootState } from '../../utils/store';
import { useParams } from 'react-router-dom';
import PageLoading from '../../components/PageLoading';
import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar, ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTranslation } from 'react-i18next';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { AccountCircle } from '@mui/icons-material';

type UserUrlParams = {
  userId: string
}

const UserAssign: React.FC = () => {
  const classes = useStyles();
  const { userId } = useParams<UserUrlParams>();

  const profileData = useSelector((state: IRootState) => state.users.currentUser);
  const businessData = useSelector((state: IRootState) => state.users)
  console.log(businessData)
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById(userId));
    dispatch(fetchAllBusinesses())
  }, [dispatch, userId]);

  if (!profileData) return <PageLoading />

  return (
    <div className={classes.user}>
      <div className={classes.userTitleContainer}>
        <Typography color="secondary" className="header" variant="h1">
          {t('user_assign', { name: profileData.name })}
        </Typography>
      </div>

      <div className={classes.container}>
        <div className={classes.left}>
          <Avatar
            className={classes.userAvatar}
            aria-label="recipe"
            alt= "profile"
            src={profileData.profilePicture}
          />
          <span className={classes.userName}>{ profileData.name }</span>
        </div>
        <div className={classes.middle}>
          <p>Select which business</p>
          <ArrowForward className={classes.arrowIcon} />
          <p>{profileData.name} is assigned to.</p>
        </div>
        <div className={classes.right}>
          <List sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            overflow: 'auto',
            maxHeight: 460,
          }}>
            {businessData.users.map(user => {
              return (
                <>
                  <ListItemButton alignItems="flex-start">
                    {user?.profilePicture ? (
                        <ListItemAvatar>
                          <Avatar alt="" src={user.profilePicture} className={classes.businessIcon} />
                        </ListItemAvatar>
                      ) : (
                        <ListItemIcon>
                          <AccountCircle className={classes.businessIcon} />
                        </ListItemIcon>
                      )
                    }
                    <ListItemText
                      primary={user.name}
                      secondary={
                        <>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {user.category}
                          </Typography>
                          <br/>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            {user.email}
                          </Typography>
                        </>
                      }
                    />
                  </ListItemButton>
                  <Divider variant="inset" component="li" />
                </>
              )
            })}
          </List>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  user: {
    flex: '4',
    padding: '20px',
  },
  userTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    display: 'flex',
    marginTop: '20px',
    width: '100%',
    padding: '20px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    maxHeight: '500px',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    width: '33%',
    // backgroundColor: 'pink'
  },
  userName: {
    fontSize: '40px',
    marginLeft: '10px',
  },
  userAvatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  middle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    // backgroundColor: 'lightgreen'
  },
  arrowIcon: {
    fontSize: '80px'
  },
  right: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    // backgroundColor: 'lightblue',
  },
  businessIcon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  }
}));

export default UserAssign;