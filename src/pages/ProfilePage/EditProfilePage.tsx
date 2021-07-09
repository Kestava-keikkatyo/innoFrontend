import {
  Avatar,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";
import React, { useEffect } from "react";
import Spacing from "../../components/Spacing";
import banner from "../../assets/form-banner.jpg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../utils/store";
import { setCoverImage, updateProfile } from "../../actions/editProfileActions";
import { useState } from "react";
import FileUploader from "../../components/FileUploader";
import fileService from "../../services/fileService";

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText("#eb5a00"),
    backgroundColor: "#eb5a00",
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  contact: {
    display: "flex",
    flexDirection: "row",
  },
  contactButton: {
    marginLeft: "1%",
  },
  information: {
    display: "flex",
    alignItems: "row",
  },
  cover: {
    textAlign: "center",
    marginRight: "22%",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  picture: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  root: {
    color: "#f50057",
    textAlign: "center",
  },
}));

export const EditProfilePage = (props: { currentProfile: any }) => {
  const { currentProfile } = props;
  const userData: any = useSelector((state: IRootState) => state.user.data);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  console.log("CURRENT PROFILE EDIT PROFILE ", currentProfile);

  const [data, setData] = useState(currentProfile);

  useEffect(() => {
    setData(currentProfile);
  }, [currentProfile]);

  const returnToProfile = () => {
    history.push("/profile");
  };

  const currentFile: any = useSelector<IRootState>(

    (state) => state.file.currentFile
  ); 
  

  //dispatch(updateForm(currentForm._id, currentForm))
  const profileEdit = async (e: any) => {
    e.preventDefault();
    if (currentFile.file !== undefined) {
      const res: any = await fileService.postFile(currentFile);
      const copyOfCover = {
        ...data.video,
        fileUrl: res.data?.fileUrl,
      };
    dispatch(setCoverImage(copyOfCover))
    dispatch(updateProfile(data, userData.profileId));
    history.push("/profile");
  }}

  
  return (
    <Container className="relative">
      <div>
        <Button onClick={returnToProfile} color="secondary">
          Return
        </Button>
      </div>
      <form>
        <img src={banner} alt="Banner" className="profile-banner" />

        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item xs={12} md={2} style={{ marginTop: -100 }}>
            <Avatar style={{ margin: "auto" }} className={classes.avatar}>
              JB
            </Avatar>
            <div className={classes.picture}>
              <FileUploader handleFile={() => ''} accept="image/*, video/*">
                <span className={classes.root}>Change picture</span>
              </FileUploader>
            </div>
          </Grid>
          <Grid item xs={12} md={10}>
            <div className={classes.cover}>
              <FileUploader handleFile={() => ''} accept="image/*, video/*">
                <span className={classes.root}>Change cover</span>
              </FileUploader>
            </div>
            <Typography variant="h4">User information</Typography>

            <TextField
              id="standard-full-width"
              name="userInformation"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              value={data.userInformation}
              onChange={(e) =>
                setData({ ...data, userInformation: e.target.value })
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <Spacing m5 />

        <Typography variant="h4">Contact information</Typography>

        <TextField
          id="standard-full-width"
          name="contactInfo"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          value={data.contactInformation}
          onChange={(e) =>
            setData({ ...data, contactInformation: e.target.value })
          }
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Typography variant="h4">Introduction video</Typography>
        <FileUploader handleFile={() => ""}>
          <span className={classes.root}>Change introduction video</span>
        </FileUploader>
        <iframe
          width="100%"
          height="600"
          src={currentProfile.video}
          title="instroduction video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={classes.information}>
          <Typography variant="h4">Instructions</Typography>
        </div>
        <div className={classes.information}>
          <TextField
            name="instructions"
            style={{
              width: "75%",
              margin: "0.5% 0 2% 0",
              border: "1px solid grey",
            }}
            id="standard-multiline-static"
            multiline
            rows={10}
            value={data.instructions}
            onChange={(e) => setData({ ...data, instructions: e.target.value })}
          />
          <Spacing m5 />
        </div>
        <Button type="submit" color="secondary" onClick={profileEdit}>
          Save changes and return
        </Button>
      </form>
    </Container>
  );
};

export default EditProfilePage;
