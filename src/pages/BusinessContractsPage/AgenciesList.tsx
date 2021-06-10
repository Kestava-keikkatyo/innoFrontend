import React, { useEffect, useState } from "react";

import { Box, InputBase, IconButton, FormControl } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { roles } from "../../types/types";
import { fetchAgencies } from "../../actions/agencyActions";
import { IRootState } from "../../utils/store";
import AgencyCard from "./AgencyCard";

const INIT_SEARCH_TYPE = roles.Worker;

/**
 * @component
 * @desc
 * A searchbar for searching worker users or business users.
 */
const AgenciesList = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [searchType, setSearchType] = useState<any>(INIT_SEARCH_TYPE);

  const { agencies } = useSelector((state: IRootState) => state.agencies);


  useEffect(() => {
    dispatch(fetchAgencies("j"));
  }, [dispatch]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    setSearchType(event.target.value);
  };

  
  const logAgencies = () => {
    console.log("tämä on fetchAgencies ", fetchAgencies);
  };
  console.log("agencies ", agencies);
  return (
    <div>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        flexWrap="wrap"
      >
        <FormControl component="fieldset"></FormControl>
        <form onSubmit={handleSubmit}>
          {logAgencies}
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
      {agencies.map((agency: any) => <AgencyCard key={agency._id} agency={agency} />)}
      
    </div>
  );
};

export default AgenciesList;
