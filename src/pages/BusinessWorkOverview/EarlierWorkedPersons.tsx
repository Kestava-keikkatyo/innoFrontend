import { Box, InputBase, IconButton } from "@material-ui/core";
import { SearchIcon } from "@material-ui/data-grid";
import React from "react";

const EarlierWorkedPersons = () => {
 const names =  [
    "Abbotsen",
    "Abbotson",
    "Abdul",
    "Abdulla",
    "Abe",
    "Abdel",
    "Abdella",
    "Abdu",
    "Abdul",
    "Abdulla",
    "Abbotsun",
    "Abbott",
    "Abbottson",
    "Abby",
    "Abbye",
    "Abdel",
    "Abdella",
    "Abdu",
    "Abe",  
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

export default EarlierWorkedPersons;
