import { Box, InputBase, IconButton, } from "@material-ui/core";
import { SearchIcon } from "@material-ui/data-grid";
import React from "react";

const SearchingWorkers = () => {
 const names =  [
    "ramdin verma",
    "sharat chandran",
    "birender mandal	",
    "amit",
    "kushal",
    "kasid",
    "shiv prakash",
    "vikram singh",
    "sanjay",
    "abhi",
    "ram dutt gupta",
    "khadak singh",
    "gurmit singh",
    "chanderpal",
    "Aaronson",
    "Ab",
    "Aba",
    "Abbey",
    "Abbi",
    "Abbie",
    "Abbot",  
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
              <SearchIcon />
            </IconButton>
            </Box>
        {names.map(n => 
        <ul>{n}</ul>
        )}
  </div>
  )
};

export default SearchingWorkers;
