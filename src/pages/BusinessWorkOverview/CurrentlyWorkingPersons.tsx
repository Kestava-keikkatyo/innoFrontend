import { Box, InputBase, IconButton } from "@mui/material";
import { Search } from '@mui/icons-material';
import React from "react";


const CurrentlyWorkingPersons = () => {
 const names =  [
    "gilmore-torres",
    "gonzales",
    "jimenez",
    "lawton",
    "jipp",
    "lazo",
    "lebron-catala	",
    "leon-rivera",
    "lopez",
  ];
  const [filter, setFilter] = React.useState("")
  return (
    <div>
       <Box display="flex" alignItems="center">
            <InputBase
              placeholder="Search by name..."
              value={filter}
            
            />
            <IconButton size="large">
              <Search />
            </IconButton>
            </Box>
        {names.map(n => 
        <ul>{n}</ul>

        )}
    </div>
  );
};

export default CurrentlyWorkingPersons;
