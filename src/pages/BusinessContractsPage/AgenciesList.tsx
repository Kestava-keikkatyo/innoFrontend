import React, { useEffect, useState } from 'react';
import {
  Box,
  InputBase,
  IconButton,
  FormControl,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAgencies } from '../../actions/allUsersActions';
import { IRootState } from '../../utils/store';
import AgencyCard from './AgencyCard';

const useStyles = makeStyles((theme) => ({
  noResults: {
    textAlign: 'center',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginLeft: '0.5%',
  },
}));

/**
 * @component
 * @desc
 * A searchbar for searching worker users or business users.
 */
const AgenciesList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [input, setInput] = useState('');
  const { agencies } = useSelector((state: IRootState) => state.allUsers);

  useEffect(() => {
    dispatch(fetchAgencies(''));
  }, [dispatch]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (input.length > 0) {
      dispatch(fetchAgencies(input));
    }
  };

  if (agencies.length < 1) {
    return (
      <div className={classes.noResults}>
        <Typography>no results</Typography>
      </div>
    );
  } else
    return (
      <div>
        <div className={classes.buttonGroup}>
          <Button variant="outlined" color="default">
            Rakennus, asennus ja huolto
          </Button>
          <Button variant="outlined" color="default" className={classes.button}>
            IT- ja tietoliikenne
          </Button>
          <Button variant="outlined" color="default" className={classes.button}>
            Koulutus- ja opetusala
          </Button>
          <Button variant="outlined" color="default" className={classes.button}>
            Tekniikka
          </Button>
          <Button variant="outlined" color="default" className={classes.button}>
            Lääketeollisuus- ja farmasia
          </Button>
          <Button variant="outlined" color="default" className={classes.button}>
            Kiinteistö
          </Button>
        </div>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          flexWrap="wrap"
        >
          <FormControl component="fieldset"></FormControl>
          <form onSubmit={handleSubmit}>
            <Box display="flex" alignItems="center">
              <InputBase
                placeholder="search with name"
                value={input}
                onChange={({ target }) => setInput(target.value)}
              />
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </Box>
          </form>
        </Box>
        {agencies.map((agency: any) => (
          <AgencyCard key={agency._id} agency={agency} />
        ))}
      </div>
    );
};

export default AgenciesList;
