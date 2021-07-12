import { Card, InputBase } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect,useState } from "react";
import { fetchProfiles } from "../../actions/editProfileActions";
import { IRootState } from "../../utils/store";
import { makeStyles } from "@material-ui/core/styles";
import ProfileCard from "./ProfileCard";

const ProfileSearch: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [filter,setFilter] = useState('')

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    search: {
      marginLeft: '3%',
      width: '40%'
    }

  });

  const classes = useStyles();

  const { profiles } = useSelector((state: IRootState) => state.profileForm);

  useEffect(() => {
    dispatch(fetchProfiles("a"));
  }, [dispatch]);


  if (profiles === undefined) {
    return <div>no results</div>;
    {
  
    }
  } else
    return (
      <Card className={classes.root}>
        <InputBase className={classes.search}
        placeholder='search...'
        value={filter || ''}
        onChange={(e:any) => setFilter(e.target.value)}
        />
        {profiles.profile.filter((profile:any) => profile.userInformation.toLowerCase().includes(filter.toLowerCase())).map((profile: any) => (
          <ProfileCard key={profile._id} profile={profile} />
        ))}
      </Card>
    );
};

export default ProfileSearch;
