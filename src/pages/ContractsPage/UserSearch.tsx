import React, { useEffect, useState } from 'react';

import {
  Box,
  InputBase,
  IconButton,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { updateSearchList } from '../../actions/businessContractActions';
import { useDispatch } from 'react-redux';
import { roles } from '../../types/types';

const INIT_SEARCH_TYPE = roles.Worker;

/**
 * @component
 * @desc
 * @deprecated
 * ###### This component is not in use ######
 * A searchbar for searching worker users or business users.
 */
const UserSearch = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [searchType, setSearchType] = useState<any>(INIT_SEARCH_TYPE);

  useEffect(() => {
    dispatch(updateSearchList('', INIT_SEARCH_TYPE));
  }, [dispatch]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (input.length > 0) {
      dispatch(updateSearchList(input, searchType));
    }
  };

  const handleChange = (event: any) => {
    setSearchType(event.target.value);
    dispatch(updateSearchList('', event.target.value));
  };

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      flexWrap="wrap"
    >
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="search type"
          row
          name="searchType"
          value={searchType}
          onChange={handleChange}
        >
          <FormControlLabel
            value={roles.Worker}
            control={<Radio />}
            label="Worker"
          />
          <FormControlLabel
            value={roles.Business}
            control={<Radio />}
            label="Business"
          />
        </RadioGroup>
      </FormControl>
      <form onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center">
          <InputBase
            placeholder="search with name"
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <IconButton type="submit" size="large">
            <SearchIcon />
          </IconButton>
        </Box>
      </form>
    </Box>
  );
};

export default UserSearch;
