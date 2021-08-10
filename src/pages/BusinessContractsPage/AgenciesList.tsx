import React, { ReactNode, useEffect, useState } from "react"
import {
  Box,
  InputBase,
  IconButton,
  FormControl,
  useMediaQuery,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core"
import { Search as SearchIcon } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { fetchAgencies, fetchAllAgencies } from "../../actions/allUsersActions"
import { IRootState } from "../../utils/store"
import AgencyCard from "./AgencyCard"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles"

/**
 * @component
 * @desc
 * A searchbar for searching worker users or business users.
 */
const AgenciesList = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  const { agencies } = useSelector((state: IRootState) => state.allUsers)
  //const [allAgencies, setAllAgencies] = useState(agencies)
 // const [filter, setFilter] = React.useState('');
  const [alignment, setAlignment] = React.useState("Kaikki")
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  const classes = useStyles()
  useEffect(() => {
    dispatch(fetchAllAgencies())
  }, [dispatch])

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    event.preventDefault()
    setAlignment(value)
    /*if (value === "Kaikki") {
      setAllAgencies([])
    } else {
      const result = agencies.filter((agency: any) => agency.category === value)
      setAllAgencies(result)
    }
    */
  }

  const handleMobileChange = (
    event: React.ChangeEvent<{ value: unknown }>,
    child: ReactNode
  ) => {
    event.preventDefault()
    setAlignment(event.target.value as string)
    /*if (event.target.value === "Kaikki") {
      setAllAgencies([])
    } else {
      const result = agencies.filter(
        (agency: any) => agency.category === event.target.value
      )
      setAllAgencies(result)
    }
    */
  }

  //Iniates search query of Agencies
  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (input.length > 0) {
      dispatch(fetchAgencies(input))
      //setAllAgencies(agencies)
    }
  }
  const fields = [
    { field: "Kaikki", name: "Kaikki" },
    {
      field: "Rakennus, asennus ja huolto",
      name: "Rakennus, asennus ja huolto"
    },
    { field: "IT- ja tietoliikenne", name: "IT- ja tietoliikenne" },
    { field: "Koulutus- ja opetusala", name: "Koulutus- ja opetusala" },
    {
      field: "Lääketeollisuus- ja farmasia",
      name: "Lääketeollisuus- ja farmasia"
    },
    { field: "Kiinteistö", name: "Kiinteistö" }
  ]

  return (
    <div>
      {matches ? (
        <FormControl>
          <InputLabel>
            <Select value={alignment} onChange={handleMobileChange}>
              {fields.map((f) => (
                <MenuItem key={f.field} value={f.name}>
                  {f.name}
                </MenuItem>
              ))}
            </Select>
          </InputLabel>
        </FormControl>
      ) : (
        <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
          {fields.map((f) => (
            <ToggleButton key={f.field} value={f.name}>
              {f.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
      <Box className={classes.searchBar}>
       
        <form onSubmit={handleSubmit}>
            <InputBase
              placeholder="search with name"
              value={input}
              onChange={({ target }) => setInput(target.value)}
            />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
        </form>
      </Box>
      {alignment === "Kaikki"
        ? agencies.map((agency: any) => (
            <AgencyCard key={agency._id} agency={agency} />
          ))
        : agencies
            .filter((agency: any) => agency.category === alignment)
            .map((agency: any) => (
              <AgencyCard key={agency._id} agency={agency} />
            ))}
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBar: {
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    flexWrap:"wrap",
    marginTop: '1%',
    marginBottom: '1%',
    marginLeft: '0.5%'
    }
  })
)

export default AgenciesList
