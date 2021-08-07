import React, { useEffect, useState } from 'react';
import {
  Box,
  InputBase,
  IconButton,
  FormControl,
  useMediaQuery,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchAgencies, fetchAllAgencies } from "../../actions/allUsersActions";
import { IRootState } from "../../utils/store";
import AgencyCard from "./AgencyCard";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import {  Theme, useTheme } from "@material-ui/core/styles";

/**
 * @component
 * @desc
 * A searchbar for searching worker users or business users.
 */
const AgenciesList = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const { agencies } = useSelector((state: IRootState) => state.allUsers);
  const [allAgencies, setAllAgencies] = useState(agencies)
  const [alignment, setAlignment] = React.useState('Kaikki');
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'));


  useEffect(() => {
    dispatch(fetchAllAgencies());
  }, [dispatch]);

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
    event.preventDefault()
    setAlignment(value)
    if (alignment === 'Kaikki') {
      setAllAgencies([])
    } else {
      const result = agencies.filter((agency: any) => agency.category === value);
      setAllAgencies(result)
    }
  };

  //Iniates search query of Agencies
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (input.length > 0) {
      dispatch(fetchAgencies(input));
      setAllAgencies(agencies)
    }
  };

  if(matches) {
    return (
      <div>
        <FormControl
        >
        <InputLabel
        
        >
        <Select
          value={alignment}
          onChange={handleChange}
          >
        <MenuItem value='Kaikki'>Kaikki</MenuItem>
        <MenuItem value='IT- ja tietoliikenne'>IT- ja tietoliikenne</MenuItem>
        </Select>
        </InputLabel>
        </FormControl>
 
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
      {allAgencies.length > 0 ? allAgencies.map((agency: any) => (
        <AgencyCard key={agency._id} agency={agency} />
      )):agencies.map((agency: any) => (
        <AgencyCard key={agency._id} agency={agency} />
      ))}
    </div>
    )
  }

  return (
    <div>
      <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
        <ToggleButton value="Kaikki">
          Kaikki
        </ToggleButton>
        <ToggleButton value="Rakennus, asennus ja huolto">
          Rakennus, asennus ja huolto
        </ToggleButton>
        <ToggleButton value="IT- ja tietoliikenne">
          IT- ja tietoliikenne
        </ToggleButton >
        <ToggleButton value="Koulutus- ja opetusala">
          Koulutus- ja opetusala
        </ToggleButton >
        <ToggleButton value="Tekniikka">
          Tekniikka
        </ToggleButton>
        <ToggleButton value="Lääketeollisuus- ja farmasia">
          Lääketeollisuus- ja farmasia
        </ToggleButton>
        <ToggleButton value="Kiinteistö">
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
      {allAgencies.length > 0 ? allAgencies.map((agency: any) => (
        <AgencyCard key={agency._id} agency={agency} />
      )):agencies.map((agency: any) => (
        <AgencyCard key={agency._id} agency={agency} />
      ))}
    </div>
  );
};

export default AgenciesList;
