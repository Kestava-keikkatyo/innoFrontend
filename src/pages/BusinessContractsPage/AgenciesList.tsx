import React, { ReactNode, useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';
import {
  Box,
  InputBase,
  IconButton,
  FormControl,
  useMediaQuery,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid
} from "@material-ui/core"
import { Search as SearchIcon } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllAgencies } from "../../actions/allUsersActions"
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
  const [alignment, setAlignment] = React.useState("Kaikki")
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  const classes = useStyles()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchAllAgencies())
  }, [dispatch])

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    event.preventDefault()
    setAlignment(value)
  }

  const handleMobileChange = (
    event: React.ChangeEvent<{ value: unknown }>,
    child: ReactNode
  ) => {
    event.preventDefault()
    setAlignment(event.target.value as string)
  }

  const showAgencyCards = (type: string) => {
    switch (type) {
      case "Kaikki":
        return (
          agencies
            .map((agency: any) => (
              <AgencyCard key={agency._id} agency={agency} />
            ))
        )
      case "Search":
        const sResult = agencies.filter((agency: any) => agency.name === input)
        if (sResult.length > 0) {
          return (
            sResult.map((agency: any) => (
              <AgencyCard key={agency._id} agency={agency} />
            ))
          )
        } else {
          return (
            <><Typography>{t('no_results')}</Typography></>
          )
        }
      default:
        const cResult = agencies.filter((agency: any) => agency.category === alignment)
        if (cResult.length > 0) {
          return (
            cResult.map((agency: any) => (
              <AgencyCard key={agency._id} agency={agency} />
            ))
          )
        } else {
          return (
            <><Typography>{t('no_results')}</Typography></>
          )
        }
    }
  }

  //Iniates search query of Agencies
  const handleSubmit = (event: any) => {
    event.preventDefault()
    setAlignment("Search")
  }
  const fields = [
    { field: "Kaikki" },
    { field: "Rakennus, asennus ja huolto", },
    { field: "IT- ja tietoliikenne" },
    { field: "Koulutus- ja opetusala" },
    { field: "Lääketeollisuus- ja farmasia" },
    { field: "Kiinteistö" }
  ]

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className={classes.searchBar}>
            <form onSubmit={handleSubmit}>
              <InputBase
                placeholder={t('search_by_name')}
                value={input || ""}
                onChange={(e: any) => setInput(e.target.value)}
              />
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          {matches ? (
            <FormControl style={{minWidth: "100%"}}>
              <InputLabel>Category</InputLabel>
              <Select autoWidth={true} value={alignment} onChange={handleMobileChange}>
                {fields.map((f) => (
                  <MenuItem key={f.field} value={f.field}>
                    {f.field}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <ToggleButtonGroup 
              classes={{root: classes.buttonGroupRoot }} 
              className={classes.buttonGroup} 
              value={alignment} exclusive 
              onChange={handleChange} 
              orientation="vertical">
              {fields.map((f) => (
                <ToggleButton key={f.field} value={f.field}>
                  {f.field}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          )}
        </Grid>
        <Grid item xs={12} md={10}>
          {showAgencyCards(alignment)}
        </Grid>
      </Grid>
      <div></div>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBar: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "wrap",
      marginTop: "1%",
      marginBottom: "1%",
      marginLeft: "0.5%"
    },
    buttonGroup: {
      display: "inline-grid",
      borderRadius: "0px"
    },
    buttonGroupRoot: {
      borderRadius: "0px"
    }
  })
)

export default AgenciesList
