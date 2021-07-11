import { Card } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchProfiles } from "../../actions/editProfileActions";
import { IRootState } from "../../utils/store";
import { makeStyles } from "@material-ui/core/styles";
import ProfileCard from "./ProfileCard";

const ProfileSearch: React.FC<any> = () => {
  const dispatch = useDispatch();


  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },

  });

  const classes = useStyles();

  const { profiles } = useSelector((state: IRootState) => state.profileForm);

  useEffect(() => {
    dispatch(fetchProfiles("a"));
  }, [dispatch]);



  //Tälle sivulle ei ole vielä keksitty käyttöä, mutta tätä voidaan varmaankin hyödyntää

  if (profiles === undefined) {
    return <div>no results</div>;
    {
  
    }
  } else
    return (
      <Card className={classes.root}>
        {profiles.profile.map((profile: any) => (
          <ProfileCard key={profile._id} profile={profile} />
          
        ))}
      </Card>
    );
};

export default ProfileSearch;
