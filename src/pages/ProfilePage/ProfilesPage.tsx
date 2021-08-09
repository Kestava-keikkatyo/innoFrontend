import {
  Box,
  Container,
  IconButton,
  InputBase,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchProfiles } from '../../actions/profileActions';
import { IRootState } from '../../utils/store';
import { makeStyles } from '@material-ui/core/styles';
import ProfileCard from './ProfileCard';
import { SearchIcon } from '@material-ui/data-grid';

const ProfilesPage: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const classes = useStyles();

  const { profiles } = useSelector((state: IRootState) => state.profile);

  console.log('profiles', profiles);

  useEffect(() => {
    dispatch(fetchProfiles());
  }, [dispatch]);

  if (!profiles) {
    return <div>no results</div>;
  } else
    return (
      <Container maxWidth="lg" className={classes.root}>
        <Box style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Typography variant="h4" color="primary">
            Profiles
          </Typography>
        </Box>
        <Box className={classes.ContainerBox}>
          <Box display="flex" alignItems="center" className={classes.searchBox}>
            <InputBase
              placeholder="Search by name..."
              value={filter}
              onChange={(e: any) => setFilter(e.target.value)}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>

          <Box className={classes.profilesBox}>
            {profiles &&
              profiles
                .filter((profile: any) =>
                  profile.name.toLowerCase().includes(filter.toLowerCase())
                )
                .map((profile: any) => (
                  <ProfileCard key={profile._id} profile={profile} />
                ))}
          </Box>
        </Box>
      </Container>
    );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    //textAlign: 'center',
    marginTop: 10,
  },
  ContainerBox: {
    width: '100%',
    padding: 16,
  },
  searchBox: {
    marginBottom: 24,
  },
  profilesBox: {
    width: '100%',
    //textAlign: 'center',
  },
}));

export default ProfilesPage;
