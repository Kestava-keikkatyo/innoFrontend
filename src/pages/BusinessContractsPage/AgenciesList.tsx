import React, { useEffect, useState } from 'react';
import {
  Box,
  InputBase,
  IconButton,
  FormControl,
  makeStyles,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchAgencies, fetchAllAgencies } from "../../actions/allUsersActions";
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
  const [allAgencies, setAllAgencies] = useState(agencies)

  useEffect(() => {
    dispatch(fetchAllAgencies());
  }, []);

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
    event.preventDefault()
    if (value === 'Kaikki') {
      dispatch(fetchAllAgencies())
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

  return (
    <div>
      <ToggleButtonGroup exclusive onChange={handleChange}>
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
