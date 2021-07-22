import { Box, Card, Container, IconButton, InputBase } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchProfiles } from '../../actions/profileActions';
import { IRootState } from '../../utils/store';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProfileCard from './ProfileCard';
import { SearchIcon } from '@material-ui/data-grid';

const ProfilesPage: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const theme = useTheme();

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
        <Box className={classes.box}>
          <Box display="flex" alignItems="center" className={classes.search}>
            <InputBase
              placeholder="Search by name..."
              value={filter}
              onChange={(e: any) => setFilter(e.target.value)}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>

          {profiles &&
            profiles
              .filter((profile: any) =>
                profile.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map((profile: any) => (
                <ProfileCard key={profile._id} profile={profile} />
              ))}
        </Box>
      </Container>
    );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  box: {
    width: '100%',
    padding: 24,
  },
  search: {
    marginBottom: 24,
  },
}));

export default ProfilesPage;
