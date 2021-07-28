import {
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Grid,
  InputBase,
  IconButton,
  Divider,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchIcon } from '@material-ui/data-grid';

const SearchBox: React.FC<any> = ({ placeholder, value, onChange }) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      flexWrap="wrap"
    >
      <form>
        <Box display="flex" alignItems="center">
          <InputBase
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
      </form>
    </Box>
  );
};
export default SearchBox;
