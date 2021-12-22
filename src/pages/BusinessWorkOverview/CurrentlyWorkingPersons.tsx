import { Box, InputBase, IconButton } from "@material-ui/core";
import { Search } from '@material-ui/icons';
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
            <IconButton>
              <Search />
            </IconButton>
            </Box>
        {names.map(n => 
        <ul>{n}</ul>

        )}
    </div>
  )
};

export default CurrentlyWorkingPersons;
