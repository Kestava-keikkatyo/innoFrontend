import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useEffect  } from "react";
import { fetchUserById } from "../../actions/usersActions";
import { IRootState } from "../../utils/store";
import { useParams } from "react-router-dom";
import PageLoading from "../../components/PageLoading";
import { Avatar, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@mui/icons-material';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useTranslation } from "react-i18next";

type UserUrlParams = {
  userId: string
}

const UserProfile: React.FC<{ myProfile?: boolean }> = ({ myProfile }) => {
  const classes = useStyles();
  const { userId } = useParams<UserUrlParams>();

  const myUserId = useSelector((state: IRootState) => state.user.data._id);

  let profileId : string = myProfile ? myUserId : userId;

  const profileData: any = useSelector((state: IRootState) => state.users.currentUser);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById(profileId));
  }, [dispatch, profileId]);

  if (!profileData || profileId !== profileData._id) return (
    <PageLoading />
  );

  return (
  <div className={classes.user}>
    <div className={classes.userTitleContainer}>
    <Typography color="secondary" className={classes.userTitle} variant="h4">{t('user_profile')}</Typography>
    </div>
    <div className={classes.userContainer}>
      <div className={classes.userShow}>
        <div className={classes.userShowTop}>
            <Avatar 
            className={classes.avatar}
            aria-label="recipe"
            alt= "profile"
            src={profileData.profilePicture}
            />
        </div>
        <div className={classes.userShowBottom}>
          <span className={classes.userShowTitle}>{t('user_account_details')}</span>
          <div className={classes.userShowInfo}>
            <PermIdentity className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>{ profileData.name }</span>
          </div>
          <div className={classes.userShowInfo}>
            <WorkspacePremiumOutlinedIcon className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>{ profileData.userType }</span>
          </div>
          { (profileData.userType === 'agency'||profileData.userType === 'business') ?
          <div className={classes.userShowInfo}>
            <CategoryOutlinedIcon className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}> {profileData.category }</span>
          </div>
          : null}
          <span className={classes.userShowTitle}>{t('user_contact_details')}</span>
          <div className={classes.userShowInfo}>
            <PhoneAndroid className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>{ profileData.phoneNumber }</span>
          </div>
          <div className={classes.userShowInfo}>
            <MailOutline className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}> {profileData.email }</span>
          </div>
          <div className={classes.userShowInfo}>
            <LocationSearching className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>
              { [profileData.street, profileData.zipCode, profileData.city].join(', ') }
            </span>
          </div>
          { (profileData.userType === 'agency'||profileData.userType === 'business') ?
          <div className={classes.userShowInfo}>
            <LanguageOutlinedIcon className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}> {profileData.website }</span>
          </div>
          : null}
          { profileData.userType === 'worker' ? 
          <div className={classes.userShowInfo}>
            <span className={classes.userShowTitle}>{t('user_licenses')}</span> 
            <span className={classes.userShowInfoTitle}>{ profileData.licenses }</span>
          </div>
          : null}
        </div>
      </div>
    </div>
  </div> 
  );
}

const useStyles = makeStyles((theme: any) => ({
  user: {
    flex: '4',
    padding: '20px',
  },
  userTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userTitle: {},
  userContainer: {
    display: 'flex',
    marginTop: '20px',
    width: '600px',
  },
  userShow: {
    flex: '1',
    padding: '20px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  },
  userShowTop: {
    display: 'flex',
    alignItems: 'center',
  },
  userShowBottom: {
    marginTop: '20px',
  },
  userShowTitle: {
    fontSize: '22px',
    fontWeight: 600,
    color: 'rgb(175, 170, 170)',
  },
  userShowInfo: {
    display: 'flex',
      alignItems: 'center',
      margin: '20px 0px',
      color: '#444',
  },
  userShowIcon: {
    fontSize: '16px !important',
  },
  userShowInfoTitle: {
    marginLeft: '10px',
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default UserProfile;