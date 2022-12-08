import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById, fetchAllBusinesses, updateUser, assignWorkerToBusiness } from '../../actions/usersActions';
import { IRootState } from '../../utils/store';
import { useParams } from 'react-router-dom';
import PageLoading from '../../components/PageLoading';
import {
  Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  Divider,
  List,
  ListItemAvatar, ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTranslation } from 'react-i18next';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { AccountCircle, ArrowDownward } from '@mui/icons-material';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { SelectedBusinessNameAndID } from '../../types/types';
import { setAlert } from '../../actions/alertActions';
import i18next from 'i18next';

type UserUrlParams = {
  userId: string
}

const UserAssign: React.FC = () => {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  const [open, setOpen] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<SelectedBusinessNameAndID | null>(null);
  const handleClickOpen = (selectedBusinessName: string, selectedBusinessID: string) => {
    const selectedBusinessInfo: SelectedBusinessNameAndID = {
      name: selectedBusinessName,
      id: selectedBusinessID
    }
    setSelectedBusiness(selectedBusinessInfo);
    setOpen(true);
  }
  const handleClose = () => {
    setSelectedBusiness(null);
    setOpen(false);
  }
  const handleAssign = () => {
    if (profileData && selectedBusiness) {
      console.log(`UserId: ${profileData._id} and BusinessId: ${selectedBusiness.id}`)
      dispatch(assignWorkerToBusiness(profileData._id, selectedBusiness.id));
      dispatch(setAlert(i18next.t('user_updated_successfully')));
    }
  }

  const { userId } = useParams<UserUrlParams>();
  const profileData = useSelector((state: IRootState) => state.users.currentUser);
  const businessData = useSelector((state: IRootState) => state.users)
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
          {t('user_assign', { worker: profileData.name })}
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
          <p>{t('user_arrow_top_text')}</p>
          {width >= 900 ? (
            <ArrowForward className={classes.arrowIcon} />
          ) : (
            <ArrowDownward className={classes.arrowIcon} />
          )}
          <p>{t('user_arrow_bottom_text', { worker: profileData.name })}</p>
        </div>
        <div className={classes.right}>
          <List className={classes.list}>
            {businessData.users.map((user, index) => {
              return (
                <div key={index}>
                  <ListItemButton alignItems="flex-start" onClick={() => handleClickOpen(user.name, user._id)}>
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
                </div>
              )
            })}
          </List>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {t('dialog_title', { worker: profileData.name, business: selectedBusiness?.name})}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('dialog_description')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('dialog_disagree')}</Button>
          <Button onClick={handleAssign} autoFocus color="success">{t('dialog_agree')}</Button>
        </DialogActions>
      </Dialog>

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
    [theme.breakpoints.down('md')] : {
      overflow: 'scroll',
      alignItems: 'center',
      flexDirection: 'column'
    }
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    width: '33%',
    // backgroundColor: 'pink',
    [theme.breakpoints.down('md')] : {
      width: '100%'
    }
  },
  userName: {
    fontSize: '40px',
    marginLeft: '10px',
    textAlign: 'center',
    [theme.breakpoints.down('md')] : {
      fontSize: '24px'
    }
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
    // backgroundColor: 'lightgreen',
    [theme.breakpoints.down('md')] : {
      width: '100%'
    }
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
    [theme.breakpoints.down('md')] : {
      width: '100%'
    }
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'paper',
    overflow: 'auto',
    maxHeight: 460,
  },
  businessIcon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  }
}));

export default UserAssign;