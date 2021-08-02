import React, { useEffect, useState } from 'react';
import {
  Box,
  InputBase,
  IconButton,
  FormControl,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchAgencies } from "../../actions/allUsersActions";
import { IRootState } from "../../utils/store";
import AgencyCard from "./AgencyCard";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

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

  //This is used to make category search of Agencies.
  const [alignment] = React.useState(['Rakennus, asennus ja huolto','IT- ja tietoliikenne','Koulutus- ja opetusala','Tekniikka','Lääketeollisuus- ja farmasia','Kiinteistö']);

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
    console.log(value)
  };
  //Iniates search query of Agencies
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (input.length > 0) {
      dispatch(fetchAgencies(input));
    }
  };
  //If there is no agencies found show no results
  if (agencies.length < 1) {
    return (
      <div className={classes.noResults}>
        <Typography>no results</Typography>
      </div>
    );
  } else
    return (
      <div>
        <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
          <ToggleButton value="1">
            Rakennus, asennus ja huolto
          </ToggleButton>
          <ToggleButton value="2">
            IT- ja tietoliikenne
          </ToggleButton >
          <ToggleButton value="3">
            Koulutus- ja opetusala
          </ToggleButton >
          <ToggleButton value="4">
            Tekniikka
          </ToggleButton>
          <ToggleButton value="5">
            Lääketeollisuus- ja farmasia
          </ToggleButton>
          <ToggleButton value="6">
            Kiinteistö
          </ToggleButton>
        </ToggleButtonGroup>
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
