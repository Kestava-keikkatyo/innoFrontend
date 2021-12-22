import React from 'react';
import { Box, InputBase, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

/**
 * @component
 * @desc Search box component
 * @param {any} props (placeholder, value and onChange) for InputBase element
 */
const SearchBox: React.FC<any> = ({ placeholder, value, onChange }) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      flexWrap="wrap"
    >
      <Box display="flex" alignItems="center">
        <InputBase
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <IconButton>
          <Search />
        </IconButton>
      </Box>
    </Box>
  );
};
export default SearchBox;
