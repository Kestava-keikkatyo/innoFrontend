import {
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid
  } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import React from 'react';
import { fetchProfileById } from '../../../actions/profileActions';
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../utils/store";
import {useEffect  } from "react";
import ImageUploader from "../../../components/ImageUploader";
import { makeStyles } from "@material-ui/core";


type UserUrlParams = {
    profileId: string
}

const User: React.FC<any> = () => {
  const classes = useStyles();
  const { profileId } = useParams<UserUrlParams>();
  const profileData: any = useSelector((state: IRootState) => state.profile.currentProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileById(profileId));
  }, [dispatch, profileData.profileId]);
  
  return (
  <div className={classes.user}>
    <div className={classes.userTitleContainer}>
      <h1 className={classes.userTitle}>Edit User's Profile</h1>
    </div>
    <div className={classes.userContainer}>
      <div className={classes.userShow}>
        <div className={classes.userShowTop}>
          <ImageUploader picture={profileData.profilePicture} />
          <div className={classes.userShowTopTitle}>
            <span className={classes.userShowUsername}>{ profileData.name }</span>
            <span className={classes.userShowUserTitle}>Role</span>
          </div>
        </div>
        <div className={classes.userShowBottom}>
          <span className={classes.userShowTitle}>Account Details</span>
          <div className={classes.userShowInfo}>
            <PermIdentity className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>{ profileData.name }</span>
          </div>
          <span className={classes.userShowTitle}>Contact Details</span>
          <div className={classes.userShowInfo}>
            <PhoneAndroid className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>{ profileData.phone }</span>
          </div>
          <div className={classes.userShowInfo}>
            <MailOutline className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}> {profileData.email }</span>
          </div>
          <div className={classes.userShowInfo}>
            <LocationSearching className={classes.userShowIcon} />
            <span className={classes.userShowInfoTitle}>
              { [profileData.streetAddress, profileData.zipCode, profileData.city].join(', ') }
            </span>
          </div>
        </div>
      </div>
      <div className={classes.userUpdate}>
        <span className={classes.userUpdateTitle}>Edit</span>
        <form className={classes.userUpdateForm}>
          <div>
            <div className={classes.userUpdateItem}>
              <label>Name</label>
              <input
                type="text"
                placeholder="Firstname Lastname"
                className={classes.userUpdateInput}
              />
            </div>
            <div className={classes.userUpdateItem}>
              <label>Email</label>
              <input
                type="text"
                placeholder="user@example.com"
                className={classes.userUpdateInput}
                />
            </div>
            <div className={classes.userUpdateItem}>
              <label>Phone</label>
              <input
                type="text"
                placeholder="000 000 0000"
                //value={profileData.phone || ''}
                className={classes.userUpdateInput}
              />
            </div>
            <div className={classes.userUpdateItem}>
              <label>Website</label>
              <input
                type="text"
                placeholder="www.example.com"
                className={classes.userUpdateInput}
              />
            </div>
            <div className={classes.userUpdateItem}>
              <label>Address</label>
              <input
                type="text"
                placeholder="Street"
                className={classes.userUpdateInput}
              />
              <input
                type="text"
                placeholder="City"
                className={classes.userUpdateInput}
              />
                <input
                type="text"
                placeholder="Zip Code"
                className={classes.userUpdateInput}
              />
            </div>
         </div>
        </form>
      </div>
    </div>
  </div> 
  );
}

const useStyles = makeStyles(() => ({
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
  userShowTopTitle: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
  },
  userShowUsername: {
    fontWeight: 600,
  },
  userShowUserTitle: {
    fontWeight: 300
  },
  userShowBottom: {
    marginTop: '20px',
  },
  userShowTitle: {
    fontSize: '14px',
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
  userUpdate: {
    flex: '2',
    padding: '20px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    marginLeft: '20px',
  },
  userUpdateTitle: {
    fontSize: '24px',
    fontWeight: 600,
  },
  userUpdateForm: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  userUpdateInput: {
    border: 'none',
    width: '250px',
    height: '30px',
    borderBottom: '1px solid gray',
  },
  userUpdateItem: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
  },
}));

export default User;