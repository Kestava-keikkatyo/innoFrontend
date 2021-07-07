import { Card, CardContent, Divider, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchProfiles } from "../../actions/editProfileActions";
import { IRootState } from "../../utils/store";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const ProfileSearch: React.FC<any> = () => {
  const dispatch = useDispatch();

  /*
  {agencies.map((agency: any) => (
    <AgencyCard key={agency._id} agency={agency} />
  ))}
*/
  /*
  11: {_id: "60ddac2d8edfae3ba407b65b", 
  userInformation: "user information", 
  contactInformation: "contact information", 
  video: "link", 
  instructions: "instructions", …}
  */

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    button: {
      width: "6%",
      height: "2%",
      marginTop: "0.3125em",
    },
  })
  
    const classes = useStyles();

  const { profiles } = useSelector((state: IRootState) => state.profileForm);

  useEffect(() => {
    dispatch(fetchProfiles("a"));
  }, [dispatch]);


  console.log("profiilit :", profiles);

  //Tälle sivulle ei ole vielä keksitty käyttöä, mutta tätä voidaan varmaankin hyödyntää

  if (profiles === undefined) {
    return <div>no results</div>;
  } else
    return (
      <Card className={classes.root}>
        {profiles.profile.map((profile: any) => (
          <CardContent key={profile._id}>
            <Typography variant="body2" 
            color="textSecondary" 
            component="p"
            >
                   <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
             Profiilisivu
            </Button>
              <b> User Info </b> - {profile.userInformation} -{profile.contactInformation} 
         
              <Divider/>
            </Typography>
          </CardContent>
        ))}
      </Card>
    );
};

export default ProfileSearch;
