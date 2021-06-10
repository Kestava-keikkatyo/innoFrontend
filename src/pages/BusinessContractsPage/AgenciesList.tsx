import React, { useEffect, useState } from "react";
import {
  Box,
  InputBase,
  IconButton,
  FormControl,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchAgencies } from "../../actions/agencyActions";
import { IRootState } from "../../utils/store";
import AgencyCard from "./AgencyCard";

const useStyles = makeStyles((theme) => ({
  noResults: {
    textAlign: 'center'
  },
}));

/**
 * @component
 * @desc
 * A searchbar for searching worker users or business users.
 */
const AgenciesList = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [input, setInput] = useState("")
  const { agencies } = useSelector((state: IRootState) => state.agencies)

  useEffect(() => {
    dispatch(fetchAgencies("j"));
  }, [dispatch]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (input.length > 0) {
      dispatch(fetchAgencies(input));
    }
  };

  const logAgencies = () => {
    console.log("tämä on fetchAgencies ", fetchAgencies);
  };

  if (agencies.length < 1) {
    return(
    <div className={classes.noResults}>
    <Typography>no results</Typography>
    </div>
    )} else
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
        {agencies.map((agency: any) => (
          <AgencyCard key={agency._id} agency={agency} />
        ))}
      </div>
    );
};

export default AgenciesList;