import {
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid
  } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import "./user.css";
import React from 'react';
import { fetchProfileById } from '../../../actions/profileActions';
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../utils/store";
// import { useTranslation } from 'react-i18next'
import {useEffect  } from "react";
import ImageUploader from "../../../components/ImageUploader";


type UserUrlParams = {
    profileId: string
}

const User: React.FC<any> = () => {
  const { profileId } = useParams<UserUrlParams>();
  const profileData: any = useSelector((state: IRootState) => state.profile.currentProfile);
  const dispatch = useDispatch();
  // const { t } = useTranslation();
  useEffect(() => {
    dispatch(fetchProfileById(profileId));
  }, [dispatch, profileData.profileId]);
  
  return (
  <div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle">Edit User's Profile</h1>
      <Link to="/newUser">
      <button className="userAddButton">Create</button>
      </Link>
    </div>
    <div className="userContainer">
      <div className="userShow">
        <div className="userShowTop">
          <ImageUploader picture={profileData.profilePicture} />
          <div className="userShowTopTitle">
            <span className="userShowUsername">{ profileData.name }</span>
            <span className="userShowUserTitle">Role</span>
          </div>
        </div>
        <div className="userShowBottom">
          <span className="userShowTitle">Account Details</span>
          <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">{ profileData.name }</span>
          </div>
          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">{ profileData.phone }</span>
          </div>
          <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle"> {profileData.email }</span>
          </div>
          <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowInfoTitle">
              { [profileData.streetAddress, profileData.zipCode, profileData.city].join(', ') }
            </span>
          </div>
        </div>
      </div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Name</label>
              <input
                type="text"
                placeholder="Firstname Lastname"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                placeholder="user@example.com"
                className="userUpdateInput"
                />
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input
                type="text"
                placeholder="000 000 0000"
                //value={profileData.phone || ''}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Website</label>
              <input
                type="text"
                placeholder="www.example.com"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Address</label>
              <input
                type="text"
                placeholder="Street"
                className="userUpdateInput"
              />
              <input
                type="text"
                placeholder="City"
                className="userUpdateInput"
              />
                <input
                type="text"
                placeholder="Zip Code"
                className="userUpdateInput"
              />
            </div>
         </div>
        </form>
      </div>
    </div>
  </div> 
  );
}
export default User;