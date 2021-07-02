import {
  Avatar,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  TextField,
} from '@material-ui/core';
import React from 'react';
import Spacing from '../../components/Spacing';
import banner from '../../assets/form-banner.jpg';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import {
  fetchProfileById,
  updateProfile,
} from '../../actions/editProfileActions';
import { useState } from 'react';
import FileUploader from '../../components/FileUploader';

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText('#eb5a00'),
    backgroundColor: '#eb5a00',
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
  },
  contactButton: {
    marginLeft: '1%',
  },
  picture: {
    display: 'flex',
    alignContent: 'center',
    color: 'f50057',
  },
  information: {
    display: 'flex',
    alignItems: 'row',
  },
  cover: {
    textAlign: 'center',
    marginRight: '22%',
  },
  root: {
    color: '#f50057',
    textAlign: 'center',
  },
}));

const EditProfilePage: React.FC = () => {
  const userData: any = useSelector((state: IRootState) => state.user.data);

  // const [data, setData] = useState({
  //   cover: {},
  //   profilePicture: {},
  //   userInformation: '',
  //   contactInformation: '',
  //   video: '',
  //   instructions: '',
  // });

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const currentProfile: any = useSelector(
    (state: IRootState) => state.profileForm
  );
  let [loading, setLoading] = useState(true);
  const [data, setData] = useState(currentProfile);
  React.useEffect(() => {
    dispatch(fetchProfileById(userData.profileId));
    setLoading(false);
  }, [dispatch, userData.profileId, loading]);

  const returnToProfile = () => {
    history.push('/profile');
  };
  //dispatch(updateForm(currentForm._id, currentForm))
  const profileEdit = (e: any) => {
    e.preventDefault();
    dispatch(updateProfile(data, userData.profileId));
    history.push('/profile');
  };

  console.log('PROFIILI ', currentProfile);

  return (
    <Container className="relative">
      <div>
        <Button
          className={classes.picture}
          onClick={returnToProfile}
          color="secondary"
        >
          Return
        </Button>
      </div>
      <form>
        <img src={banner} alt="Banner" className="profile-banner" />

        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item xs={12} md={2} style={{ marginTop: -100 }}>
            <Avatar style={{ margin: 'auto' }} className={classes.avatar}>
              JB
            </Avatar>
            <FileUploader handleFile={() => ''}>
              <span className={classes.root}>Upload profile picture</span>
            </FileUploader>
          </Grid>
          <Grid item xs={12} md={10}>
            <div className={classes.cover}>
              <FileUploader handleFile={() => ''}>
                <span className={classes.root}>Upload cover</span>
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

        <Spacing m5 />
        <div className={classes.contact}>
          <Typography variant="h4"> Information / Video</Typography>
        </div>

        <TextField
          id="standard-full-width"
          name="video"
          style={{ margin: 8 }}
          placeholder="paste a youtube link here or upload your own video"
          fullWidth
          margin="normal"
          value={data.video}
          onChange={(e) => setData({ ...data, video: e.target.value })}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Spacing m5 />
        <div className={classes.information}>
          <Typography variant="h4">Instructions</Typography>
        </div>
        <div className={classes.information}>
          <TextField
            name="instructions"
            style={{
              width: '75%',
              margin: '0.5% 0 2% 0',
              border: '1px solid grey',
            }}
            id="standard-multiline-static"
            multiline
            rows={10}
            value={data.instructions}
            onChange={(e) => setData({ ...data, instructions: e.target.value })}
          />
          <Spacing m5 />
          <Button
            type="submit"
            color="secondary"
            style={{ height: '2%', justifyContent: 'center', marginTop: '8%' }}
            onClick={profileEdit}
          >
            Save changes and return
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default EditProfilePage;
